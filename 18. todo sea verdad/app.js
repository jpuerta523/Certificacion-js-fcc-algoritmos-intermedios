/* donde estas aprobado FCC
recibe arreglo de multiples objetos y una propiedad, primero recorre el arreglo original generando un nuevo arreglo con los valores de la propiedad definida en la funcion, luego verifica si los valores son verdaderos boleanos*/
function truthCheck(collection, pre) {
    return collection
            .map(x => x[pre])
            .every(a => Boolean(a))
}

console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"))
console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name"))
console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "role"))