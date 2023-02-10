/* union ordenada 
respuesta para FCC*/

/* logica para union ordenada
primero se declara la funcion para que acepte varios arreglos como funciones y se define el arreglo inicial y el resto se juntan en uno solo y se eliminan elementos repetidos.
luego ser recorre el segundo arreglo buscando coincidencias y se ageraga el elemento si la coincidencia es falsa */
function uniteUnique(...arr) {
    let firstArr = arguments[0]
    const flatArr = [...arr].splice(1,[...arr].length).flat()
    let firstArr1 = firstArr.filter((item,index)=>{
        return firstArr.indexOf(item) === index;})
    
    for (i=0; i<flatArr.length; i++){
        if(!firstArr1.includes(flatArr[i])){
            firstArr1.push(flatArr[i])
        }
    }
    return firstArr1
}


//uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]))



