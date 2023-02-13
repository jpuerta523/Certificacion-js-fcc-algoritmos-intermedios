/*Agentes Binarios, actividad de certificacion freecodecamp
estilos realizados con bootstrap y logica en JS
modificado para presentar resultados en documento HTML con respecto a lo solicitado por fcc */

const input1 = document.getElementById("inlet1")
const btn = document.getElementById("calculate")
const resultado = document.querySelector(".alert-success")
const resultadoNegativo = document.querySelector(".alert-danger")

/* logica agentes binarios
toma la cadena de texto y la convierte en arreglo utilizando como separador el espacio vacio " ",
luego recorre el arreglo con map convirtiendo los valores binarios a un numero base 10
luego vuleve a recorrer el arreglo con map para convertir el numero base 10 en su codigo UTF-16
finalmente convierte el arreglo en una cadena usando join sin utilizar separadores.*/

function binaryAgent(str) {
    return str
        .trim()
        .split(" ")
        .map(x => parseInt(x,2))
        .map(x => String.fromCharCode(x))
        .join("");
  }

  btn.addEventListener("click",()=>{

    resultado.classList.add("d-none")
    resultadoNegativo.classList.add("d-none")
    
    let str = input1.value; 

    resultado.classList.remove("d-none")
    resultado.textContent = `${binaryAgent(str)}`
}) 

