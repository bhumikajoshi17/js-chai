const name = "bhumika";
const repoCount =50;

//console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('bhumika-hc-com')
// console.log(gameName[0])
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4);// it doesn't take negative values it ignores it and starts with 0 
console.log(newString);

const anotherString= gameName.slice(-3,4);//it starts in reverse 
console.log(anotherString); // ye hua nhi

//trim()->it removes whitespaces...trimstart(),trimend().

const url =" https://hitesh.com/hitesh%20choudary"
console.log(url.replace('%20','-'))

console.log(url.includes('sundar'));

console.log(gameName.split('-'));











