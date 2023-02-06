/* logica para respuesta de FCC */
/* diferencia entre 2 arreglos */

let arr3 = [1, "calf", 3, "piglet"]
let arr4 = [7, "filly"]
let ans=[]; 

function compareArray(arr1,arr2){
    for(let i=0; i<arr2.length; i++){
        if (!arr1.includes(arr2[i])){
            ans.push(arr2[i])
        } 
    }
    return ans
}

function diffArray(arr1,arr2){
    compareArray(arr1,arr2)
    compareArray(arr2,arr1)
    return ans
}

console.log(diffArray(arr3,arr4))





