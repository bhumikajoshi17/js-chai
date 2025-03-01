//if

// const isUserLoggedIn = true
// const temperature = 41
// if(temperature < 50){
//     console.log("less than 50");
    
// }
// else{
// console.log("temperature is greater than 50 ");
// }

//<,>,<=,>=,==,===(type bhi check krta h),!=,!==


// const score =200

// if(score>100){
//     const power ="fly"  //agr const k jgh var use krte to fr scope k bhar bhi power use kr skte the i.e. not good 
//     console.log(`user power:${power}`);
    
// }


//console.log(`user power:${power}}`);

//short hand notation
const balance= 1000

//if(balance >500) console.log("test");  //isko single line m likhte h or comma lga k multiple line m kr skte h ... jo ki nhi krna h

if(balance < 500){
    console.log("less than 500");
}
else if (balance <750){
   console.log("less than 750");
}
else if (balance <900){
    console.log("less than 900");
}
else{
    console.log("less than 1200");
}

const isUserLoggedIn=true
const debitCard = true
const UserLoggedInFromGoogle =false
const UserLoggedInFromEmail = true

if(isUserLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if (UserLoggedInFromGoogle || UserLoggedInFromEmail) {
    console.log("user logged in");
}
