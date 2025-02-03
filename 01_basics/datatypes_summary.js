//primitive == call by value
//->7 types
//string , boolean , number , null, undefined , bigint , symbol

//non-primitive == call by reference
//  -> array,object,function 


//
// typeof
// null=>object
// undefined->undefined


//***************************************************** */

//stack(primitive),heap(non-primitive)
//

let myYoutubeName="hiteshdotcom"
anotherName="chaiaurcode"
console.log(myYoutubeName);
console.log(anotherName);

let c={
    email:"user@google.com"
   upi:"sjsj@jj"
}

let userTwo=userOne

userOne.email ="hitesh1212@gmail.com"

console.log(userOne);
console.log(userTwo);

