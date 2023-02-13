/* spinal-case, actividad de certificacion freecodecamp
estilos realizados con bootstrap y logica en JS
modificado para presentar resultados en documento HTML con respecto a lo solicitado por fcc */

/* identificar elementos HTML */
const input1 = document.getElementById("inlet1")
const btn = document.getElementById("calculate")
const resultado = document.querySelector(".alert-success")

/* recibe una cadena de texto y la transforma en arreglo usando como separador los casos listados por el regex, luego vuelve a unirlos usando como separador "-" y finalmente pasa todos los caracteres a minusculas */

function spinalCase(str) {
    return str
        .split(/\s|_|(?=[A-Z])/)
        .join("-")
        .toLowerCase()
  }

  /* boton calcular */
btn.addEventListener("click",()=>{
    resultado.classList.remove("d-none")
    let str = input1.value; 
    
    resultado.textContent = `${spinalCase(str)}`
}) 