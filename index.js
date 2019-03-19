
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
