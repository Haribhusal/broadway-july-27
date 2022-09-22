// let age = 13;


// if(age>19){
//     console.log('You are not Teenager')
// }
// else{
//     console.log('You are Teenager')
// }



let date = new Date();

let day = date.getDay();


let realDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]

let myRealDay = realDay[day];

if(myRealDay == "Sunday"){
    console.log('Today is Sunday, You can work today')
}
else if(myRealDay == "Monday"){
    
    console.log('Today is Monday, You can work today')
}

else if(myRealDay == "Tuesday"){
    console.log('Today is Tuesday, You can work today')

}
else if(myRealDay == "Wednesday"){
    console.log('Today is Wednesday, You can work today')

}
else if(myRealDay == "Thrusday"){
    console.log('Today is Thrusday, You can work today, this is special day')

}
else if(myRealDay == "Friday"){
    console.log('Today is Friday, You can work today')

}
else {
    console.log('Today is Saturday, You cannot work today')
}

// document.getElementById('test').innerText = `Today is ${myRealDay}`;

// console.log(day);