//array

const myArr=[0,1,2,3,4,5]
const myHeroes=["shaktiman","naagraj"]

const myArr2 =new Array(1,2,3,4,5)
// console.log(myArr[0]);
// console.log(myArr2[0]);

//array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()    //pop

//includes,indexOf

const newArray = myArr.join() //converts into string

// console.log(myArr);
// console.log(typeof newArray);





// console.log(newArray);



//**********
//slice ,splice
console.log("A",myArr);

const myn1 = myArr.slice(1,3)//last is not included->[1,2]

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)//last is included
console.log("C",myArr);
console.log(myn2);



