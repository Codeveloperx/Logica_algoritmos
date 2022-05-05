export const searchMenorBaja = (arreglo)=> {
    let menor = Math.min(...arreglo);
    let indice = arreglo.indexOf(menor);

    switch (indice) {
        case 0:
            alert(`Raza: Enanos\nMuertes: ${menor}`)
            break;
        case 1:
            alert(`Raza: Elfos\nMuertes: ${menor}`)
            break;
        case 2:
            alert(`Raza: Humanos\nMuertes: ${menor}`)
            break;
        case 3:
            alert(`Raza: Orcos\nMuertes: ${menor}`)
            break;
        case 4:
            alert(`Raza: Huarganos\nMuertes: ${menor}`)
            break;
    }
}