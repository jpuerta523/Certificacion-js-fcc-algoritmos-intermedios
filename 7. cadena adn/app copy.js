/* cadena ADN
respuesta para FCC*/

/* define logica donde para cada base de ADN devuelve un arreglo 2D con su pareja*/
function pairDNA(base){
    switch(base){
        case "A":
            return ["A","T"]
            break;
        case "T":
            return ["T","A"]
            break;
        case "C":
            return ["C","G"]
            break;
        case "G":
            return ["G","C"]
            break;
        default:
            return ["mutación"]

    }
}

/* toma una cadena de texto con las bases de ADN y separa cada una formando un arreglo, luego recoore cada uno de las bases devolviendo la pareja 2d definida por pairDNA */
function pairElement(str) {
    return str.split("").map(pairDNA);
  }

console.log(pairElement("ATCGA"))

