/* latin pig
respuesta para FCC*/

/* mediante una regex se determina el indice donde aparece la primer vocal en una cadena de texto, si el indice es 0, es decir inicia con vocal se agrega "way" al final de la cadena, si el indice es mayor que 0 inica con consonate y la cadena se modifica llevando las primeras consonante al final y agrenado "ay" al final y finalmente si el indice es -1, la cadena no tiene vocales y solo se agrega "ay" al final */
function translatePigLatin(str) {
    const regex = /[aeiou]/gi
    const index = str.search(regex)
    if (index == 0){
        return str + "way" 
    }else if (index >= 0){
        return str.slice(index, str.length) + str.slice(0, index) + "ay"
    }else{
        return str + "ay"
    }
}

let str1 = "algorithm"
let str2 = "rhythm"
let str3 ="schwartz"


console.log(translatePigLatin(str1))
console.log(translatePigLatin(str2))
console.log(translatePigLatin(str3))
console.log(translatePigLatin("glove"))
