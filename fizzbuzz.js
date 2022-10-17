// variable to hold current number value
let num = 1

// Function to print Fizz and Buzz and increase num to 100
function fizzBuzz(){
    if(num > 100){
        return
    }
    if(num % 3 == 0 && num % 5 == 0){
        console.log("FizzBuzz")
    }else if(num % 5 == 0){
        console.log("Buzz",num)
    } else if(num % 3 == 0){
        console.log("Fizz")
    } else{
        console.log(num)
    }
    num++
    fizzBuzz()
}

// Function call
fizzBuzz()