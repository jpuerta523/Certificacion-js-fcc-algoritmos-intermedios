/* entidades HTML, actividad de certificacion freecodecamp
estilos realizados con bootstrap y logica en JS
modificado para presentar resultados en documento HTML con respecto a lo solicitado por fcc */

/* identificar elementos HTML */
const input1 = document.getElementById("inlet1")
const btn = document.getElementById("calculate")
const resultado = document.querySelector(".alert-success")

/* evalua la cadena de texto y reemplaza todos los elementos definidos por sus codigos Html equivalentes*/
    function convertHTML(str) {
        return  str
        .replaceAll(`&`,"&amp;")
        .replaceAll("<","&lt;")
        .replaceAll(">","&gt;")
        .replaceAll(`"`,"&quot;")
        .replaceAll(`'`,"&apos;")
    }

/* boton calcular */
btn.addEventListener("click",()=>{
    resultado.classList.remove("d-none")
    let str = input1.value; 
    
    resultado.textContent = `${convertHTML(str)}`
}) 


