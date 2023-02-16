/* pig latin, actividad de certificacion freecodecamp
estilos realizados con bootstrap y logica en JS
modificado para presentar resultados en documento HTML con respecto a lo solicitado por fcc */

/* identificar elementos HTML */
const input1 = document.getElementById("inlet1")
const btn = document.getElementById("calculate")
const resultado = document.querySelector(".alert-success")

/* mediante una regex se determina el indice donde aparece la primer vocal en una cadena de texto, si el indice es 0, es decir inicia con vocal se agrega "way" al final de la cadena, si el indice es mayor que 0 inica con consonate y la cadena se modifica llevando las primeras consonante al final y agrenado "ay" al final y finalmente si el indice es -1, la cadena no tiene vocales y solo se agrega "ay" al final */
function translatePigLatin(str) {
    const regex = /[aeiou]/gi
    const index = str.search(regex)
    if (index == 0){
        return str + "way" 
    }else if (index >= 0){
        return str.slice(index, str.length) + str.slice(0, index) + "ay"
    }else{
        return str + "ay"
    }
}

/* boton calcular */
btn.addEventListener("click",()=>{
    resultado.classList.remove("d-none")
    let str = input1.value.toLowerCase()
    
    resultado.textContent = `${translatePigLatin(str)}`
}) 

