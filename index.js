
// find the factorial of a number
function fact(givenNum){
  if(givenNum <= 1){
    return 1
  }else{
    return givenNum*fact(givenNum-1)
  }
}

console.log(fact(10))
