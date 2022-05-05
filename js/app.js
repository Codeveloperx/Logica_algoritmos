import {buscarCodigoRaza} from './searchCodigo.js';
import { searchMayorBaja } from './searchMayor.js';
import { searchMenorBaja } from './searchMenor.js';
/*
Algoritmo 1 - Gestión Estadística de la Batalla de los Cinco
Ejércitos

Es la noche después de que Bardo El Arquero con sorprendente
puntería mató a Smaug El Dragón utilizando La Flecha Negra. Ya no hay
limitaciones para que se acceda a la riqueza que se encuentra en las
entrañas de Erabor, La Montaña Solitaria.

Gandalf, conociendo las habilidades tecnológicas de los Hobbits, le
encarga Bilbo una aplicación en Javascript que le permita llevar
registro del enfrentamiento que se llevará a cabo entre Enanos, Elfos,
Humanos, Orcos y Huargos. La idea es que en cualquier momento
Gandalf le pregunte a Bilbo como va la situación y éste le responda
diferentes indicadores de gestión sobre la batalla.

Bilbo hace una aplicación que utiliza un arreglo de 5 posiciones para
almacenar los muertos por raza, utilizando el siguiente orden: 1:
Enanos, 2: Elfos, 3: Humanos, 4: Orcos y 5: Huargos. La aplicación
pedirá la cantidad de muertos por raza y lo almacenará en el arreglo.
La aplicación utilizará:

1. Una función que recibe un dato correspondiente al código de la
raza y devolverá el nombre de la raza en un dato tipo string, según
el contexto presentado.

2. Una función que recibe el arreglo de muertos y devuelve un dato
tipo string con el nombre de la raza que más muertos lleva en la
batalla

3. Una función que recibe el arreglo de muertos y devuelve un dato
tipo string con el nombre de la raza que menos muertos lleva en la
batalla.

La aplicación al final visualizará como resultados, el total global de
muertos en combate, qué porcentaje corresponde a cada raza y cuáles
son las razas con más y menos muertos.
En este escenario, tú eres Bilbo. Realiza una aplicación que cumpla con
las especificaciones solicitadas */


// let muertos = prompt("ingrese la cantidad de muertos para "${})
let muertos_raza = ['Enanos', 'Elfos', 'Humanos', 'Orcos', 'Huarganos']
let  bajas = [];
let n_muertos = 0;
for (let index = 0; index < 5; index++) {
    n_muertos = prompt(`RAZAS \n1: Enanos \n2: Elfos \n3: Humanos \n4: Orcos \n5: Huargos\nIngrese la cantidad de muertos para ${muertos_raza[index]}`);
    bajas.push(Number(n_muertos));
}
let opcion = 0;
do {
    let opciones = Number(prompt("Acciones a Realizar: \n1. Buscar por codigo de raza \n2. Raza con mas muertos \n3. Raza con menos muertos"));

    switch (opciones) {
        case 1:
            let codigoRaza = Number(prompt(`RAZAS \n1: Enanos \n2: Elfos \n3: Humanos \n4: Orcos \n5: Huargos\nIngrese el codigo a buscar:`));
            buscarCodigoRaza(codigoRaza);
            break;
        case 2:
            searchMayorBaja(bajas)
            break;
        case 3:
            searchMenorBaja(bajas)
            break;
        default:
            alert("OPCION NO VALIDA!")
            break;
    }
    opcion = Number(prompt("Desea salir? false/true"));
} while (opcion > 0);



