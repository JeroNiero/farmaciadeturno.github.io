const listaFarmacias = [
    {
        nombre: 'Maiten',
        fechaDeReferencia: '2022-05-01',
        ubicaciones:[
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.98464594031!2d-71.64820617997582!3d-40.76236243347259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9610bf42d7c5a475%3A0x35484cf046254d4c!2sFarmacia%20Maiten!5e0!3m2!1ses!2sar!4v1660081489749!5m2!1ses!2sar'
    ], 
        direcciones: [
            'Av. Arrayanes 66'
        ]
    },
    {
        nombre: 'Pharmacy Siete Lagos',
        fechaDeReferencia: '2022-05-04',
        ubicaciones:[
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.263795803231!2d-71.65485365334109!3d-40.756222384548934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x938fa8392d2c1ac5!2sPharmacy%207%20Lagos!5e0!3m2!1ses!2sar!4v1660081342553!5m2!1ses!2sar'
    ],
        direcciones: [
            'Av. 7 lagos 745'
        ]
    },
    {
        nombre: 'Del Siglo' , 
        fechaDeReferencia: '2022-05-05',
        ubicaciones:[
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d377.7475545439012!2d-71.64279293021087!3d-40.76245501976972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9610bf0c7fb3826d%3A0x5f7b4a06fcc0118e!2sFarmacia%20Del%20Siglo!5e0!3m2!1ses!2sar!4v1660080984836!5m2!1ses!2sar'    ],
        direcciones: [
            'Av. Arrayanes 230'
        ]
    },
    {
        nombre: 'Pharmacy Avenida',
        fechaDeReferencia: '2022-05-06',
        ubicaciones: [
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d377.74762959341786!2d-71.64270575841793!3d-40.76244181458299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4941d68be6c34781!2sFaramcia%20VLA%20SRL!5e0!3m2!1ses!2sar!4v1660081203040!5m2!1ses!2sar', 
        ],
        direcciones: [
            'Av. Arrayanes 275'
        ]
    },
    {
        nombre: 'La Botica y Puerto Manzano', 
        fechaDeReferencia: '2022-05-07',
        ubicaciones: [
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.865284322702!2d-71.65788651162293!3d-40.76498762244108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9610bf4f91b48175%3A0x453dbec356243bc5!2sFarmacia%20La%20Botica!5e0!3m2!1ses!2sar!4v1660081879910!5m2!1ses!2sar', 
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.4998358194543!2d-71.592686!3d-40.795008800000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9610be391a7c666d%3A0x5fb57b3b4d49817c!2sFarmacia%20Puerto%20Manzano!5e0!3m2!1ses!2sar!4v1666730911956!5m2!1ses!2sar',
        ],
        direcciones: [
            'La Botica: Primeros Pobladores 501',
            'Puerto Manzano: Av. Arrayanes 6510 PB A',
        ]
    },
    {
        nombre: 'Radal' , 
        fechaDeReferencia: '2022-05-08',
        ubicaciones:[
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.98464594031!2d-71.64820617997582!3d-40.76236243347259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9610bf42d7c5a475%3A0x35484cf046254d4c!2sFarmacia%20Maiten!5e0!3m2!1ses!2sar!4v1660081489749!5m2!1ses!2sar'
    ],
        direcciones: [
            'Av. Arrayanes 150'
        ]
    },
    {
        nombre: 'De La Montaña' , 
        fechaDeReferencia: '2022-05-09',
        ubicaciones:[
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9997415914604!2d-71.64563328482632!3d-40.76203041616233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9610bf681dbaede5%3A0x5a9dddbe0000614d!2sFarmacia%20La%20Monta%C3%B1a!5e0!3m2!1ses!2sar!4v1667507297677!5m2!1ses!2sar'
        ],
        direcciones: [
            'Av. Arrayanes 207'
        ]
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
