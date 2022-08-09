const listaFarmacias = [
    ['Pharmacy Siete Lagos', '2022-05-04'],
    ['Del Siglo' , '2022-05-05'],
    ['Pharmacy Avenida' , '2022-05-06'],
    ['La Botica y Puerto Manzano' , '2022-05-07'],
    ['Radal' , '2022-05-08'],
    ['De La Montaña' , '2022-05-09'],
];
function verificarFecha(dia1) {
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
                console.log(siguienteFecha);
                if (siguienteFecha.day() !== 0) {
                    siguienteFecha.add(6, 'days');
                } else {
                    siguienteFecha.add(13,'days');
                };
            };
            if (siguienteFecha.unix() == diaElegido.unix()) {
                console.log('saliò!!')
                return farmacia[0];
            } else {
                console.log('diaElegido', diaElegido);
                console.log('siguienteFecha', siguienteFecha);
                console.log('farmacia', farmacia)
            };
        };
    };
};
