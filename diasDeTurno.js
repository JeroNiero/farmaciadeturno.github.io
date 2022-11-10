const listaFarmacias = [
    {
        nombre: 'Maiten',
        fechaDeReferencia: '2022-05-01',
        ubicaciones:[[-40.76208,-71.64356]],
        direcciones: 'Av. Arrayanes 66'
    },
    {
        nombre: 'Pharmacy Siete Lagos',
        fechaDeReferencia: '2022-05-04',
        ubicaciones:[[-40.75701,-71.65434]],
        direcciones: 'Av. 7 lagos 745'
    },
    {
        nombre: 'Del Siglo' , 
        fechaDeReferencia: '2022-05-05',
        ubicaciones:[[-40.76253,-71.64311]],
        direcciones: "Av. Arrayanes 230"
    },
    {
        nombre: 'Pharmacy Avenida' ,
        fechaDeReferencia: '2022-05-06',
        ubicaciones:[[-40.76250,-71.64218]],
        direcciones: 'Av. Arrayanes 275'
    },
    {
        nombre: 'La Botica y Puerto Manzano' , 
        fechaDeReferencia: '2022-05-07',
        ubicaciones:[[-40.76510,-71.65642], [-40.79500,-71.59259]],
        direcciones: 'La Botica: Primeros Pobladores 501'
    },
    {
        nombre: 'Radal' , 
        fechaDeReferencia: '2022-05-08',
        ubicaciones:[[-40.76221,-71.64287]],
        direcciones: 'Av. Arrayanes 150' 
    },
    {
        nombre: 'De La Montaña' , 
        fechaDeReferencia: '2022-05-09',
        ubicaciones:[[-40.76221,-71.64287]],
        direcciones: 'Av. Arrayanes 207'
    },
];
function verificarFecha(dia1=moment().format('YYYY-MM-DD')) {
    for (let f = 0; f < listaFarmacias.length; f++) {
        let farmacia = listaFarmacias[f];
        let fechaInicial = moment(farmacia.fechaDeReferencia,'YYYY-MM-DD');
        let diaElegido = moment(dia1,'YYYY-MM-DD');
        if (fechaInicial < diaElegido){
            let siguienteFecha = fechaInicial.clone();
            while (siguienteFecha < diaElegido) { 
                if (siguienteFecha.day() !== 0) {
                    siguienteFecha.add(6, 'days');
                } else {
                    siguienteFecha.add(13,'days');
                };
            };
            if (siguienteFecha.unix() == diaElegido.unix()) {
                return {
                    ...farmacia
                };
            };
        };
    };
};
