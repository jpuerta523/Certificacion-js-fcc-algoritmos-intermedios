/* dejalo caer aprobado FCC */

/* dropElements recibe como argumentos un arreglo y una funcion, primero se recorre el arreglo buscando el indice de la posicion del primer elemento del arreglo que cumple la funcion dada como argumento, si no hay indice (-1) devuelve un arreglo vacio, si el indice existe como un numero positivo entonces devuelve el arreglo modificado tomando los elementos desde el indice encontrado hasta el final del arreglo original  */

function dropElements(arr, func) {
    let index = arr.findIndex(func);
    if (index===-1){
        return []
    }else{
        return arr.splice(index,arr.length)
    }
}

  console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}))
  console.log(dropElements([1, 2, 3], function(n) {return n > 0;}))
  console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}))