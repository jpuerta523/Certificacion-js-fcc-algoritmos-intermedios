/* Union Ordenada, actividad de certificacion freecodecamp
estilos realizados con bootstrap y logica en JS
modificado para presentar resultados en documento HTML con respecto a lo solicitado por fcc */

/* identificar elementos HTML */
const input1 = document.getElementById("inlet1")
const input2 = document.getElementById("inlet2")
const input3 = document.getElementById("inlet3")
const input4 = document.getElementById("inlet4")
const btn = document.getElementById("calculate")
const resultado = document.querySelector(".alert-success")

/* logica para union ordenada
primero se declara la funcion para que acepte varios arreglos como funciones y se define el arreglo inicial y el resto se juntan en uno solo y se eliminan elementos repetidos.
luego ser recorre el segundo arreglo buscando coincidencias y se ageraga el elemento si la coincidencia es falsa */
function uniteUnique(arr) {
    let firstArr = arr[0]
    const flatArr = arr.splice(1,arr.length).flat()
    let firstArr1 = firstArr.filter((item,index)=>{
        return firstArr.indexOf(item) === index;})
    
    for (i=0; i<flatArr.length; i++){
        if(!firstArr1.includes(flatArr[i])){
            firstArr1.push(flatArr[i])
        }
    }
    return firstArr1
}

/* boton calcular */
btn.addEventListener("click",()=>{
    resultado.classList.remove("d-none")
    let arr1 = JSON.parse(`[${input1.value}]`); 
    let arr2 = JSON.parse(`[${input2.value}]`);
    let arr3 = JSON.parse(`[${input3.value}]`); 
    let arr4 = JSON.parse(`[${input4.value}]`);


    let args = [arr1, arr2, arr3, arr4]
    
    resultado.textContent = `${uniteUnique(args)}`
}) 





