/* buscar y reeplazar 
respuesta para FCC*/

/* logica para buscar y reemplazar
 primero verifica si la primera letra de la palabra objetivo es mayuscula o minuscula
 luego cambia la primera letra de la palabra a reemplazar en funcion de si es mayuscula o no
 entrega resultado */

let str = "I think we should look up there"
let target = "up"
let word =  "Down"

function myReplace(str, target, word) {
    if(target[0]==target[0].toUpperCase()){
        let a = word.replace(word[0],word[0].toUpperCase())
        return str.replace(target,a)
    }else{
    let a = word.replace(word[0],word[0].toLowerCase())
    return str.replace(target,a)
    }
}


console.log(myReplace(str, find, replace))

