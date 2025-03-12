let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


let myCreatedDate = new Date("2024-02-14")
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.getTime());

let myTimeStamp =Date.now()
console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMilliseconds());
console.log(newDate.getMonth() + 1 );
console.log(newDate.getDay())

newDate.toLocaleString('default', {
    weekday:"long",
    
})
