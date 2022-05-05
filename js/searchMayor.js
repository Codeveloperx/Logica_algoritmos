export const searchMayorBaja = (arreglo)=> {
    let mayor = Math.max(...arreglo);
    let indice = arreglo.indexOf(mayor);

    switch (indice) {
        case 0:
            alert(`Raza: Enanos\nMuertes: ${mayor}`)
            break;
        case 1:
            alert(`Raza: Elfos\nMuertes: ${mayor}`)
            break;
        case 2:
            alert(`Raza: Humanos\nMuertes: ${mayor}`)
            break;
        case 3:
            alert(`Raza: Orcos\nMuertes: ${mayor}`)
            break;
        case 4:
            alert(`Raza: Huarganos\nMuertes: ${mayor}`)
            break;
    }
}