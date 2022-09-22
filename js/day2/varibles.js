
var _sasas = "hey"

var payment_amount = 1000;

var paymentAmountToBeDone = 1000; 

// console.log(` the total amount is  ${payment_amount + paymentAmountToBeDone }`);
// Camelcasing

var payment_status = false;
// snake casing

var MyNameIs = "hari"
// pascal casing


// var 9ClassStudents = ""

let incrementer = 10;
// global variable

function addTwoNumbers(firstnumber, secondnumber) {
//  return firstnumber+secondnumber + incrementer;

 var result = firstnumber + secondnumber;
//  local variable
 return result + incrementer;

}

// console.log(result);


console.log(

    addTwoNumbers(10,12)
)




var name = 'Hari';

// var name = "Test name"
// variable redeclare
name = 'test test test'
// variable update


console.log(name);

var age =21;
var message = 'no message';

if(age < 19){

 message = 'You are teenager';

    console.log(message);
}

console.log('new message',message )