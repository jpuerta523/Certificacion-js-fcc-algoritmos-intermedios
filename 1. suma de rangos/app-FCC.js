/* Respuesta para FCC */
function sumAll(arr) {
    arr.sort((a,b) => a-b)

    for(let i=arr[0]; i< arr[1]-1;i++){
        arr.push(i+1)
    }
    return arr.reduce((a,b)=>a+b)
  }


console.log(sumAll([10,5]))    