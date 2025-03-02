//for each

const coding =["js","ruby","java","python","cpp"]

// coding.forEach(  function(val){   //because it's a callback function to isme function ka name ni aayega//
//    //kuki ye function arr k ander chlra h to we can use anything like val,item in parameters
//   console.log(val);
  
// })

// coding.forEach(  (item) => {   //yaha bhi name = nhi aayega
//   console.log(item);
  
// }  )


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe) //yha sirf reference dena h call ni krna h 
 
coding.forEach((item , index, arr)=>{
 console.log(item , index , arr);
 
})

const myCoding = [
    {
    languageName:"javascript",
    languageFileName:"js"
},
{
    languageName:"java",
    languageFileName:"java"
},
{
    languageName:"python",
    languageFileName:"py"
}] 

myCoding.forEach( (item)=>{
    console.log(item.languageName);
})

