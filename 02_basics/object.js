//singleton
//constructor s object bnega to singleton bnega ... literals s singleton nhi bnega
//Object.create->constructor k through bbnta h obj aese
//object literals 
const mySym = Symbol("key1")

const jsUser={
    name:"bhumika",//name yha p string k trh use hora h 
    "full name":"bhumika joshi",
    [mySym] : "myKey1",//without brackets it act as a string only...for using it as a symbol we have to use square bracekets..
    age:21,
    location:"gurugram",
    email :"bhumika17@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
 }
// console.log(jsUser.email);   //in this method to access email we dont have to make it String
// console.log(jsUser["email"]);//yha hume email ko string bnana padhta h
// console.log(jsUser["full name"]);//isko hum . s access nhi kr skte
// console.log( typeof jsUser [mySym]); //ye to string hi dera

jsUser.email ="hitesh@chatgpt.com"
//Object.freeze(jsUser)  //ab non changeble h
jsUser.email="bhumika17@microsoft.com"
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello jsUser");
}
jsUser.greetingTwo = function(){
    console.log(`hello jsUser , ${this.name}`);//thiss is used to know about the object properties 
    
}

console.log(jsUser.greeting());//function execute ni hua h srf function ka reference aaya h 

console.log(jsUser.greetingTwo());//


