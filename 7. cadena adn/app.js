/*Cadena ADN, actividad de certificacion freecodecamp
estilos realizados con bootstrap y logica en JS
modificado para presentar resultados en documento HTML con respecto a lo solicitado por fcc */

/* identificar elementos HTML */
const input1 = document.getElementById("inlet1")
const btn = document.getElementById("calculate")
const resultado = document.querySelector(".alert-success")

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
    return str.trim()
        .split("")
        .map(pairDNA);
}

/* boton calcular */
btn.addEventListener("click",()=>{
    resultado.classList.remove("d-none")
    let str = input1.value; 
    
    resultado.textContent = `${pairElement(str)}`
}) 



