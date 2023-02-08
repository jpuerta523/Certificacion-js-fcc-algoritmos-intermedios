function orbitalPeriod(arr) {
    let ansArr = []
    for (let i=0; i<=arr.length-1; i++){
        const orb = period(arr[i].avgAlt)
        let ans = {name: arr[i].name, avgAlt: orb}
        ansArr.push(ans)
    }
    return ansArr
}

/* Calcula el periodo Orbital en funcion de la altura promedio del objeto */
function period(alt){
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const a = Math.pow(earthRadius + alt, 3) 
    /* resultado final de la experesion */
    return Math.round(2 * Math.PI * Math.sqrt(a/GM))
}

console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])) 