const user= {
      username:"hitesh",
      price:999,

      welcomeMessage: function(){
        //console.log(`${this.username},Welcome to website`); //this is used for current context
        //console.log(this); //it is inside object 
        
      }
}

// user.welcomeMessage()
// user.username ="sum"   
// user.welcomeMessage()

//console.log(this);//here global context is empty
//same ka ans window aayega if it is executed in browser

// function chai(){
//     let username = "bhumika"
//     console.log(this.username); //undefined as it is inside function
    
// }
// chai()

// const chai = function(){
//     let username = "bhumika"
//     console.log(this.username);  //undefined
// }
// chai()


// const chai =  () => {       //arrow function
//     let username = "bhumika"
//     console.log(this);  
// }
// chai()

//arrow function syntax is:  () =>{}


  //explicit return means using return 
// const addTwo =(num1,num2) =>{
//   return num1+num2    //when we use {} we have to use return 
// }
// console.log(addTwo(3,4));

//implicit return  

// const addTwo =(num1,num2) =>  num1+num2
//or when we use ()then we dont have to use return 
//const addTwo =(num1,num2) =>  (num1+num2)


const addTwo =(num1,num2) =>  ({username:"bhumika"})  //object ko return krne k liye we have to use small parenthesis (), otherwise it will give undefined

console.log(addTwo(3,4));
// const myArray=[2,5,3,7,8]
// myArray.forEach()







