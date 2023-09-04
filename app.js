const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const WPPConnectProviderClass = require('@bot-whatsapp/provider/wppconnect')
const MockAdapter = require('@bot-whatsapp/database/mock')


const flowpagos = addKeyword(['1', 'Pagos', 'pagos',"1 pagos"]).addAnswer(
    [
        'Se acepta\nBANCO INTERBANK',
        '🔵 BANCO BCP, Cuenta simple en soles 49591475633006 CCI: 00249519147563300605',
        '🔵 YAPE AL NUMERO DE CELULAR:\n 995 871 095',  {
            delay: 1000,
        },
    ],
  
    null,
    null,
)

const flowhorarios = addKeyword(['2', 'Horarios', 'horarios',"2 horarios"]).addAnswer(
    [
        'Atención de Lunes a Sabado',
        'Mañanas de 9:00am a 12:30pm',
        'Ubicación Jr. Mariano H. Cornejo\n372-129, Puno Segundo Piso',
        {
            delay: 1000,
        },
    ],
    null,
    null,
)

const flowcdictados = addKeyword(['3', 'Cursos Dictados', 'cursos dictados',"3 Cursos Dictados"]).addAnswer(
    [
        '- CURSO TALLER DE POWER BI',
        '- CURSO TALLER DE AULAS VIRTUALES CON CHAMILIO',
        '- CURSO TALLER DE INTELIGENCIA ARTIFICIAL',
        '- CURSO TALLER DE HERRAMIENTAS DIGITALES TECNOLÓGICAS PARA LA GESTIÓN',
        '- CURSO TALLER DE DISEÑO Y EDICION DE AUDIO Y VIDEO',
        '- CURSO TALLER DE OFIMÁTICA AVANZADA Y HERRAMIENTAS DE GOOGLE DRIVE',
        '- SQL SERVER AVANZADO CON ORACLE',
        '- CURSO TALLER DE PIZARRAS INTERACTIVAS DIGITALES',
        'Link con la infornación detallada de cada curso:\nhttps://ciispuno.es/cursos\n',
        'Si desea tener un certificado de un curso anterior\npuede asercarse al colegio de ingenieros en el horario de atención.',
    ],
    null,
    null,
)

const flowcactuales = addKeyword(['4', 'Cursos Actuales', '4 Cursos Actuales',"4 cursos actuales"]).addAnswer(
    [
        '- CURSO TALLER DE HERRAMIENTAS DE VIDEO CONFERENCIA Y CLASSROOM',
    ],
    null,
    null,
)

const flowfcursos = addKeyword(['5', '5 Futuros Cursos', 'futuros cursos',"Futuros Cursos"]).addAnswer(
    [
        'CIENCIA DE DATOS',
        'REDES Y TELECOMUNICACIONES, SEGURIDAD INFORMATICA',
    ],
    null,
    null,
)

const flowcertificados = addKeyword(['6', 'Envio', 'pagos',"6 Envió de certificados a otras provincias"]).addAnswer(
    [
        'Los certificados pueden ser enviados mediante Olva Courier.\nEl envio se realiza el dia 15 o 30 de cada mes.\nEl pago es calculado por el servicio + 5 soles de comisión por envío.', 
    ],
    null,
    null,
)
const flowcoordinador = addKeyword(['7']).addAnswer([
    'Horario de Atención:\nde 9:00 am a 12:30pm\nNumero Personal del Coordinador:  944 052 430\nEspere unos instantes hasta que se conecte el coordinador...'],

    )
const flowPrincipal = addKeyword(['hola', 'ole', 'alo'])
    .addAnswer('🙌 Buenos días, desea saber alguna información en específico. (Escriba solo el número con la información que desea).')
    .addAnswer(
        [
            '👉 *1* Pagos',
            '👉 *2* Horarios de atención',
            '👉 *3* Cursos Dictados',
            '👉 *4* Cursos Actuales',
            '👉 *5* Futuros Cursos',
            '👉 *6* Envió de certificados a otras provincias',
            '👉 *7* Hablar con el coordinador',

        ],
        null,
        null,
    )

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal,flowpagos,flowhorarios, flowcdictados, flowcactuales,flowfcursos,flowcertificados,flowcoordinador])
    const adapterProvider = createProvider(WPPConnectProviderClass)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
