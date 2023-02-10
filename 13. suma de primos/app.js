/* Suma primos, actividad de certificacion freecodecamp
estilos realizados con bootstrap y logica en JS
modificado para presentar resultados en documento HTML con respecto a lo solicitado por fcc */

/* identificar elementos HTML */
const input1 = document.getElementById("inlet1")
const btn = document.getElementById("calculate")
const resultado = document.querySelector(".alert-success")
const resultadoNegativo = document.querySelector(".alert-danger")

/* funcion para calcular la suma de los numeros primos hasta num */
function sumPrimos(num){
    /* genera un arreglo con todos los numeros desde el 2 hasta num */
    let ans = []
    for (i=2; i<=num; i++){
        ans.push(i)
    }

    /* toma el arreglo con los numeros, filta los primos y luego suma todos sus elementos */
    return ans.filter(isPrimo).reduce((a, b) => a + b )
}
/* logica que verifica si un numero es primo */
function isPrimo(num){
    for (let i = 2; num > i; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num > 1;
}

/* boton calcular */
btn.addEventListener("click",()=>{
    
    resultado.classList.add("d-none")
    resultadoNegativo.classList.add("d-none")
    let num = parseInt(input1.value); 

    if (num >=2){
        resultado.classList.remove("d-none")
        resultado.textContent = `la suma de los números primos desde 2 hasta ${num} es de: ${sumPrimos(num)}`
    }else{
        resultadoNegativo.classList.remove("d-none")
        resultadoNegativo.textContent = "No es posible realizar la operación para números menores a 2"
    }
}) 





