/* aplanar aprobado FCC */

/* recibe un arreglo que puede tener o no otros elementos anidados, primero convierte el arreglo a cadena de texto y elimina los espacios en blanco que son resultado de arreglos [], luego vuelve a convertir la cadena en arreglo y finalmente recorre el arreglo resultado dando formato a los numeros y objetos  */
function steamrollArray(arr) {
    return arr
        .toString("-")
        .replace(",,", ",")
        .split(",")
        .map(x =>{
            if (x=='[object Object]'){
                return {}
            }else if (isNaN(x)){
                return x
            }else{
                return parseInt(x)
            }
                
            }
        )}

        /* pruebas con resultado en consola */

let a = [1, [], [3, [[[4]]]]]
let b = [1, {}, [3, [[4]]]]
let c = [[["a"]], [["b"]]]

console.log(steamrollArray([1, [2], [3, [[4]]]]))
console.log(steamrollArray(a))
console.log(steamrollArray(b))
console.log(steamrollArray(c))