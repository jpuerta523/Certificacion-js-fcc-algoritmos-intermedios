/*suma fibonacci impares, actividad de certificacion freecodecamp
estilos realizados con bootstrap y logica en JS
modificado para presentar resultados en documento HTML con respecto a lo solicitado por fcc */

/* identificar elementos HTML */
const input1 = document.getElementById("inlet1")
const btn = document.getElementById("calculate")
const resultado = document.querySelector(".alert-success")

/* logica para calcular la suma de los numeros impares de seria fibonacci hasta un numero determinado, primero se genera un arreglo con todos los numeros fibonacci hasta un nuemro indicado, luego se filtra los numeros impares del arreglo y finalmente se reduce sumado todos los elementos del arreglo*/
function sumFibs(num) {
    let ans = [1,1]
    
    for (i=0; i<=num-3; i++){
        let a = ans[i]+ans[i+1]
        if(num >= a){
            ans.push(a)
        }
    }
    return ans
            .filter(x => x % 2 !=0)
            .reduce((x,y) => x + y)
}

/* boton calcular */
btn.addEventListener("click",()=>{
    resultado.classList.remove("d-none")
    let num = parseInt(input1.value ) 
    
    resultado.textContent = `La suma de los números impares de la serie Fibonacci hasta ${num} es: ${sumFibs(num)}`
}) 
