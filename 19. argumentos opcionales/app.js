/* argumentos opcionales aprobado FCC */

/* la funcion recibe 2 argumentos, is el primero no es numero devuelve undefined, si solo tiene un argumento pregunta por el segundo y lo adiciona a los aragumentos luego revisa si el segundo argumento es numero y en el caso falso devuelve undefined, finalmente si ambos son numeros devuleve la suma */
function addTogether() {
    const [a, b] = arguments;
    if (typeof(a) !== "number"){
        return undefined
    }    
    if (arguments.length === 1){
        return (b) => addTogether(a, b);
    }
    if (typeof(b) !== "number"){
        return undefined
    }
    return a + b
}    
   
/* pruebas */
let a = "5"
let b = "a"
console.log(addTogether(a,b))
