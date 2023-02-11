/* letras faltantes
respuesta para FCC*/

/* logica para encontrar la letra faltante en una cadena de caracteres buscando un orden alfabetico
primero se crea un arreglo "ans" donde se empuja el codigo numerico UTF-16 corresponidente a cada caracter de la cadena suministrada
luego se busca en la cadena ans algun elemento no consecutivo numericamente y se devuelve la letra correspondiente*/
function fearNotLetter(str) {
    let ans = []
    for (let i = 0; i<str.length; i++){
        ans.push(str[i].charCodeAt(0))
    }
    for (let i=1; i<str.length; i++){
        if (str.charCodeAt(0)+i !== ans[i]){
            let x = String.fromCharCode(str.charCodeAt(0)+i)
            return x
            } 
    }  
}


