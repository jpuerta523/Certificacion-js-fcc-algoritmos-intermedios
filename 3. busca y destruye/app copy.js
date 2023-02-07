/* buscar y destruir */
/* Respuesta para FCC con entarda como objeto */

function destroyer(arr) {
    let arr1 = Object.values(arguments).slice(0);
    let destroy = Object.values(arguments).slice(1)
    let firstAns = arr1[0].filter(x => x!==destroy[0])
    let ans = firstAns.filter(x => x!==destroy[1])
for (let i=1; i<destroy.length; i++){
    ans = ans.filter(x => x!==destroy[i])
    }
    return ans
}


console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3))

