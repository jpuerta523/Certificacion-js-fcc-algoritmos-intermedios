/*mcm, actividad de certificacion freecodecamp
estilos realizados con bootstrap y logica en JS
modificado para presentar resultados en documento HTML con respecto a lo solicitado por fcc */

/* identificar elementos HTML */
const input1 = document.getElementById("inlet1")
const input2 = document.getElementById("inlet2")
const btn = document.getElementById("calculate")
const resultado = document.querySelector(".alert-success")

/* busca el maximo comun divisor */
 const mcd = (a, b) => {
    if (b === 0) return a;
    return mcd(b, a % b);
};

/* busca el minimo comun multiplo con el algortimo de euclides */
function mcm(a,b) {
    return (a * b)/ mcd(a,b)
}

/* primero se ordena numericamente el arreglo de entrada, luego se genera un arreglo "ans" que incluye todos los numeros entre el primer ys segundo elemento del arreglo de entrada, finalmente se reduce el arreglo "ans" aplicando la funcion mcm */
function smallestCommons(a,b) {
    let arr= [a,b].sort((x,y) => x-y)
    let ans =[arr[0]]
    for(i=0; i< arr[1]-arr[0]; i++ ){
        ans.push(ans[i]+1)
    }
    return ans.reduce(mcm)
}

/* boton calcular */
btn.addEventListener("click",()=>{
    resultado.classList.remove("d-none")
    let num1 = parseInt(input1.value ) 
    let num2 = parseInt(input2.value )
    
    resultado.textContent = `El mínimo común múltiplo de ${num1} y ${num2} y los números contenidos entre ellos es: ${smallestCommons(num1,num2)}`
}) 
