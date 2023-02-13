/* buscar y reeplazar 
respuesta para FCC*/

/* logica agentes binarios
toma la cadena de texto y la convierte en arreglo utilizando como separador el espacio vacio " ",
luego recorre el arreglo con map convirtiendo los valores binarios a un numero base 10
luego vuleve a recorrer el arreglo con map para convertir el numero base 10 en su codigo UTF-16
finalmente convierte el arreglo en una cadena usando join sin utilizar separadores.*/

function binaryAgent(str) {
    return str
        .split(" ")
        .map(x => parseInt(x,2))
        .map(x => String.fromCharCode(x))
        .join("");
  }

let str = "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"

console.log(binaryAgent(str))