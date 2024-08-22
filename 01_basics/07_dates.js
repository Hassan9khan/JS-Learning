let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());


let create = new Date(2022 ,0 , 29, 5, 90 ) 
// console.log(create.toDateString());
// console.log(create.toLocaleString());



let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(create.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.toLocaleString());
// console.log(newDate.getMonth() + 1);
// let start = newDate.getDay()
// console.log(start.toLocaleString());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})