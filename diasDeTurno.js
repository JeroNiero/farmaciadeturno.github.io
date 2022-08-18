const listaFarmacias = [
    ['Maiten', '2022-05-01',"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.98464594031!2d-71.64820617997582!3d-40.76236243347259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9610bf42d7c5a475%3A0x35484cf046254d4c!2sFarmacia%20Maiten!5e0!3m2!1ses!2sar!4v1660081489749!5m2!1ses!2sar", 'Av. Arrayanes 66'],
    ['Pharmacy Siete Lagos', '2022-05-04',"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.263795803231!2d-71.65485365334109!3d-40.756222384548934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x938fa8392d2c1ac5!2sPharmacy%207%20Lagos!5e0!3m2!1ses!2sar!4v1660081342553!5m2!1ses!2sar", 'Av. 7 lagos 745'],
    ['Del Siglo' , '2022-05-05', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d377.7475545439012!2d-71.64279293021087!3d-40.76245501976972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9610bf0c7fb3826d%3A0x5f7b4a06fcc0118e!2sFarmacia%20Del%20Siglo!5e0!3m2!1ses!2sar!4v1660080984836!5m2!1ses!2sar', 'Av. Arrayanes 230'],
    ['Pharmacy Avenida' , '2022-05-06',"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d377.74762959341786!2d-71.64270575841793!3d-40.76244181458299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4941d68be6c34781!2sFaramcia%20VLA%20SRL!5e0!3m2!1ses!2sar!4v1660081203040!5m2!1ses!2sar", 'Av. Arrayanes 275'],
    ['La Botica y Puerto Manzano' , '2022-05-07', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.865284322702!2d-71.65788651162293!3d-40.76498762244108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9610bf4f91b48175%3A0x453dbec356243bc5!2sFarmacia%20La%20Botica!5e0!3m2!1ses!2sar!4v1660081879910!5m2!1ses!2sar', 'La Botica: Primeros Pobladores 501'],
    ['Radal' , '2022-05-08', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d755.4974804104053!2d-71.64521737080457!3d-40.762246398707894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9610bfc9651c6431%3A0xd3102a5a1e23936f!2sFarmacia%20Radal!5e0!3m2!1ses!2sar!4v1660081819745!5m2!1ses!2sar', 'Av. Arrayanes 150'],
    ['De La Montaña' , '2022-05-09',"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d377.7503905043755!2d-71.64384061198855!3d-40.76195602159554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9610bf681dbaede5%3A0x5a9dddbe0000614d!2sFarmacia%20La%20Monta%C3%B1a!5e0!3m2!1ses!2sar!4v1660081424064!5m2!1ses!2sar", 'Av. Arrayanes 207'],
    
];
function verificarFecha(dia1=moment().format('YYYY-MM-DD')) {
    for (let f = 0; f < listaFarmacias.length; f++) {
        let farmacia = listaFarmacias[f];
        let fechaInicial = moment(farmacia[1],'YYYY-MM-DD');
        let diaElegido = moment(dia1,'YYYY-MM-DD');
        if (fechaInicial == diaElegido) {
            return farmacia[0];
        } else if (fechaInicial > diaElegido){
           return 'error';
        } else if (fechaInicial < diaElegido){
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
                    nombre : farmacia[0],
                    ubicacion : farmacia[2],
                    fecha: dia1,
                    direccion: farmacia[3],
                }
            };
        };
    };
};
