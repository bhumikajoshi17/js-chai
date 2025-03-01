//dates

let myDate =new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.getTimezoneOffset());
// console.log(typeof myDate);

//let myCreatedDate = new Date(2023, 0 , 23) // month start with 0 when we pass values like an array
let myCreatedDate = new Date(2023, 0 , 23,5,3)
//let myCreatedDate = new Date("2023-01-14")//month start with 1 here
//let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

//convert in seconds
//console.log(Math.floor(Date.now()/1000));  // to avoid decimal values we use math.floor


let newDate = new Date()
//console.log(newD/ate);
console.log(newDate.getMonth()+1); //+1 for user appearance
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",
    
})
