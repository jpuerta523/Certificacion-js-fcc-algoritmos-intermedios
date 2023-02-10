function sumPrimes(num){
  /* genera un arreglo con todos los numeros desde el 2 hasta num */
  let ans = []
  for (let i=2; i<=num; i++){
      ans.push(i)
  }
  //return ans
  return ans.filter(isPrimo).reduce((a, b) => a + b )
}

function isPrimo(num){
  for (let i = 2; num > i; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
}

sumPrimes(10);
//console.log(typeof sumPrimos(977))





