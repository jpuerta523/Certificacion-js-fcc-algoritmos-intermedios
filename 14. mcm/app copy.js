/* mcm
respuesta para FCC*/

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
function smallestCommons(arr) {
    let a = arr.sort((a,b) => a-b) 
    let ans =[arr[0]]
    console.log(a)
    for(i=0; i< arr[1]-arr[0]; i++ ){
        ans.push(ans[i]+1)
        console.log(ans)
    }
    return ans.reduce(mcm)
}
 console.log(smallestCommons([2,10]))