//for of 

// ["","",""]
// [{},{},{}]

// const arr =[1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
    
// }
//maps
//having unique values in ame given order

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('FR',"France")
map.set('IN',"India")

// console.log(map);

for (const [ key , value] of map) {   //here we should use [] if we want to access key and value individually
    console.log(key , ':-' ,value);
}

const myObject={
    'game1':'NFS',
    'game2':'SpiderMan'
// }
// for (const [key,value] of myObject) {
//     console.log(key,':-',value);
    
 }
//for of is not iterable for objects 