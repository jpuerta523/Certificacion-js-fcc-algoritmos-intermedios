/* Suma de rangos, actividad de certificacion freecodecamp
estilos realizados con bootstrap y logica en JS
modificado para presentar resultados en documento HTML con respecto a lo solicitado por fcc */

/* identificar elementos HTML */
const input1 = document.getElementById("inlet1")
const input2 = document.getElementById("inlet2")
const btn = document.getElementById("calculate")
const resultado = document.querySelector(".alert-success")

/* compara 2 arreglos y devuelve las difrencias en un nuevo arreglo */

function diffArray(arr1,arr2){
    let ans = []
    function compareArray(arr1,arr2){
        for(let i=0; i<arr2.length; i++){
            if (!arr1.includes(arr2[i])){
                ans.push(arr2[i])
            } 
        }
        return ans
    }

    compareArray(arr1,arr2)
    compareArray(arr2,arr1)
    return ans
}

  /* boton calcular */
  btn.addEventListener("click",()=>{
    resultado.classList.remove("d-none")
    let arr1 = JSON.parse(`[${input1.value}]`); 
    let arr2 = JSON.parse(`[${input2.value}]`); 

    if (diffArray(arr1,arr2).length !=0){
        resultado.textContent = `Los arreglos suministrados tienen ${diffArray(arr1,arr2).length} elemento(s) diferente(s): [ ${diffArray(arr1,arr2)} ]` 
    }else{
        resultado.textContent = "Ambos Arreglos tienen los mismos elementos"
    }
   
}) 

//console.log(diffArray(arr3,arr4))





