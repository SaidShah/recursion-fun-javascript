
// factorial using recursion
function fact(givenNum){
  if(givenNum <= 1){
    return 1
  }else{
    return givenNum*fact(givenNum-1)
  }
}

console.log(fact(10))

//fibonacci sequence using recursion

function fib(givenNum){
  if(givenNum <=1){
    return givenNum
  }else{
    return fib(givenNum-1)+fib(givenNum-2)
  }
}

console.log(fib(8))

// reversing a string with recursion
function reverseString(givenString){
  if(givenString.length === 0){
    return ''
  }else{
    return givenString[givenString.length-1]+reverseString(givenString.substring(0,givenString.length-1))
  }
}


console.log(reverseString("Florida"));

// find the greatest common divider
function gcd(firstNum, secondNum){

  if(!secondNum){
    return firstNum
  }

  return gcd(secondNum, firstNum%secondNum)
}

console.log(gcd(4000,400))
