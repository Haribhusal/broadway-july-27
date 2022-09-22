// while loop
// let i =0;

// while(i<10){
//     console.log(i);
//     i++
// }


// for (i=0; i<10; i++){
//     console.log("my nummber is", i)
// }

let students = ["Gyalbu", "Urja", "Kushal", "Nabin"];

// for(let stu in students){
//     console.log(students[stu])
// }


function addMessageToEachStudent(student){
    return `${student} is attending today`;

}

students.forEach(function(stu){
    console.log(addMessageToEachStudent(stu))
})

