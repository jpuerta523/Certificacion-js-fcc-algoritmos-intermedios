/* Suma de rangos, actividad de certificacion freecodecamp
estilos realizados con bootstrap y logica en JS
modificado para presentar resultados en documento HTML con respecto a lo solicitado por fcc */

/* identificar elementos HTML */
const input1 = document.getElementById("inlet1")
const input2 = document.getElementById("inlet2")
const btn = document.getElementById("calculate")
const resultado = document.querySelector(".alert-success")

/* logica para sumar rango, primero se determina el valor menor del rango, luego se empuja cada valor entre el minimo y maximo en el arreglo original, finalmente se suma todos los elementos con reduce */
function sumAll(arr) {
    arr.sort((a,b) => a-b)

    for(let i=arr[0]; i< arr[1]-1;i++){
        arr.push(i+1)
    }
    return arr.reduce((a,b)=>a+b)
  }

  /* boton calcular */
btn.addEventListener("click",()=>{
    resultado.classList.remove("d-none")
    let num1 = parseInt(input1.value); 
    let num2 = parseInt(input2.value); 
    let arr = JSON.parse(`[${num1},${num2}]`)
    
    resultado.textContent = `La suma de los números comprendidos entre ${num1} y ${num2} es: ${sumAll(arr)}` 
}) 

  