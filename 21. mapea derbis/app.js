/* Mapeo Derbis, actividad de certificacion freecodecamp
estilos realizados con bootstrap y logica en JS
modificado para presentar resultados en documento HTML con respecto a lo solicitado por fcc */

/* identificar elementos HTML */
const input1 = document.getElementById("inlet1")
const btn = document.getElementById("calculate")
const resultado = document.querySelector(".alert-success")

/* Calcula el periodo Orbital en funcion de la altura promedio del objeto */
function orbitalPeriod(alt){

    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const a = Math.pow(earthRadius + alt, 3)
    return Math.round(2 * Math.PI * Math.sqrt(a/GM))
}

/* boton calcular */
btn.addEventListener("click",()=>{
    resultado.classList.remove("d-none")
    let num1 = parseInt(input1.value); 
    
    resultado.textContent = `El periodo orbital para un cuerpo celeste con una altura promedio de ${num1}km es de ${orbitalPeriod(num1)} segundos`
}) 

