/*Busca y reemplaza, actividad de certificacion freecodecamp
estilos realizados con bootstrap y logica en JS
modificado para presentar resultados en documento HTML con respecto a lo solicitado por fcc */

const input1 = document.getElementById("inlet1")
const input2 = document.getElementById("inlet2")
const input3 = document.getElementById("inlet3")
const btn = document.getElementById("calculate")
const resultado = document.querySelector(".alert-success")
const resultadoNegativo = document.querySelector(".alert-danger")

/* logica para buscar y reemplazar
 primero verifica si la primera letra de la palabra objetivo es mayuscula o minuscula
 luego cambia la primera letra de la palabra a reemplazar en funcion de si es mayuscula o no
 entrega resultado */
 
 function myReplace(str, target, word) {
     if(target[0]==target[0].toUpperCase()){
         let a = word.replace(word[0],word[0].toUpperCase())
         return str.replace(target,a)
     }else{
     let a = word.replace(word[0],word[0].toLowerCase())
     return str.replace(target,a)
     }
 }

 btn.addEventListener("click",()=>{

    resultado.classList.add("d-none")
    resultadoNegativo.classList.add("d-none")
    
    let str = input1.value; 
    let target = input2.value;
    let word = input3.value; 

    if(str.includes(target)){
        resultado.classList.remove("d-none")
        resultado.textContent = `${myReplace(str, target, word)}`
    }else{
        resultadoNegativo.classList.remove("d-none")
        resultadoNegativo.textContent = `la palabra "${target}" no esta presente en la frase "${str}".`
    }
}) 
