/* suma fibonacci impares
respuesta para FCC*/

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