/* letra faltante, actividad de certificacion freecodecamp
estilos realizados con bootstrap y logica en JS
modificado para presentar resultados en documento HTML con respecto a lo solicitado por fcc */

/* identificar elementos HTML */
const input1 = document.getElementById("inlet1")
const btn = document.getElementById("calculate")
const resultado = document.querySelector(".alert-success")
const resultadoNegativo = document.querySelector(".alert-danger")


/* logica para encontrar la letra faltante en una cadena de caracteres buscando un orden alfabetico
primero se crea un arreglo "ans" donde se empuja el codigo numerico UTF-16 corresponidente a cada caracter de la cadena suministrada
luego se busca en la cadena ans algun elemento no consecutivo numericamente y se devuelve la letra correspondiente*/
function fearNotLetter(str) {
    let ans = []
    for (let i = 0; i<str.length; i++){
        ans.push(str[i].charCodeAt(0))
    }
    for (let i=1; i<str.length; i++){
        if (str.charCodeAt(0)+i !== ans[i]){
            let x = String.fromCharCode(str.charCodeAt(0)+i)
            return x
            } 
    }  
}

/* boton calcular */
btn.addEventListener("click",()=>{
    resultado.classList.add("d-none")
    resultadoNegativo.classList.add("d-none")
    let str = input1.value; 
    
    if (fearNotLetter(str) === undefined){
        resultadoNegativo.classList.remove("d-none")
        resultadoNegativo.textContent = "Cadena ingresada no válida"
    }else{
        resultado.classList.remove("d-none")
        resultado.textContent = `La letra faltante en ${str} es: ${fearNotLetter(str)}`
    }    
}) 

/* let str = "abcdefghjklmno"
console.log(fearNotLetter(str)) */
