/* Buscar y destruir, actividad de certificacion freecodecamp
estilos realizados con bootstrap y logica en JS
modificado para presentar resultados en documento HTML con respecto a lo solicitado por fcc */

/* identificar elementos HTML */
const input1 = document.getElementById("inlet1")
const input2 = document.getElementById("inlet2")
const btn = document.getElementById("calculate")
const resultado = document.querySelector(".alert-success")
const resultadoNegativo = document.querySelector(".alert-danger")

/* logica para buscar y destruir
primero se crea un arreglo con el primer elemento eliminado
luego se elimina el resto de los elementos del arreglo con el ciclo for */

function destroyer(arr1,arr2) {
    let firstAns = arr1.filter(x => x!==arr2[0])
    let ans = firstAns.filter(x => x!==arr2[1])
for (let i=1; i<arr2.length; i++){
    ans = ans.filter(x => x!==arr2[i])
    }
    return ans
}

/* boton calcular */
btn.addEventListener("click",()=>{
    resultado.classList.add("d-none")
    resultadoNegativo.classList.add("d-none")
    
    let arr1 = JSON.parse(`[${input1.value}]`); 
    let arr2 = JSON.parse(`[${input2.value}]`); 
    //console.log(destroyer(arr1,arr2))

    //resultado.textContent = `En [${arr1}] se busca y destruye [${arr2}] quedando como resultado: [${destroyer(arr1,arr2)}]`
    if (destroyer(arr1,arr2).length === 0){
        resultado.classList.remove("d-none")
        resultado.textContent = ` [${arr2}] destruyo por completo a [${arr1}] `
       }else if(destroyer(arr1,arr2).length === arr1.length){
        resultadoNegativo.classList.remove("d-none")
        resultadoNegativo.textContent = ` [${arr1}] no destruyo ningún  elemento de [${arr1}] `
    }else{
        resultado.classList.remove("d-none")
        resultado.textContent = `En [${arr1}] se busca y destruye [${arr2}] quedando como resultado: [${destroyer(arr1,arr2)}]`
    }}) 



