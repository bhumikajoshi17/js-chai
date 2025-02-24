function sayMyName() {
console.log("B");
console.log("h");
console.log("u");
console.log("m");
console.log("i");
console.log("k");
console.log("a");

}
 //sayMyName()
//sayMyName-->refernce ()-->execution

// function addTwoNumbers(number1,number2){  //number1,number2-->parameters
//     console.log(number1+number2);
// }

 //addTwoNumbers(3,null) //3,null -->arguments


 function addTwoNumbers(number1,number2){  //number1,number2-->parameters
// let result =number1+number2
// return result 
return number1 + number2 
console.log("hitesh"); // unreachable code as it is after return 

}
 const result = addTwoNumbers(3,5)
 //console.log("result : ",result);

function loginUserName(username){//if we define username="sam" here only thenif we didnt pass any argument then by default username will be sam and if argument is given it will be overwritten
    if(username===undefined){ //we can also useif(!username)...it means the same
        //console.log("please enter a valid username");
        return

        
    }
    return `${username} just logged in `
}

//console.log(loginUserName("hitesh"));
//console.log(loginUserName()); //-->output-->undefined

function calculateCartPrice(val1,val2,...num1){ //rest operator-->...
    return num1
}

//console.log(calculateCartPrice(200,400,500));

const user={
    username:"hitesh",
    price: 199
}

function handleObject(anyObject){
   console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
   
}

//handleObject(user) //yaha compulsary object hi pass krna h
//or object bnake pass krdo
handleObject({
    username:"sam",
    price:399
})


const myNewArray =[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]

}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));


