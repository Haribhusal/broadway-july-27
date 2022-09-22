
let message = "hello teenagers"

let age = 32;

if (age> 19){
   let updatedMessage = message + ' Hey ';
//    let variables are block scoped.
    console.log("updated message inside curly: ", updatedMessage);
}


console.log('message outside curly braces for updated message: ', message);



let x = 10;

let y = x*10;
// console.log(y);

if(x<15){
   let y = x*15;
    console.log("y value", y)
}


console.log(y)

;