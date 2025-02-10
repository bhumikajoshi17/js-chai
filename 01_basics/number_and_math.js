const score=400
//console.log(score);

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));

const otherNumber = 123.8456

//console.log(otherNumber.toPrecision(3));//round of

const hundreds =10000000
//console.log(hundreds.toLocaleString('en-IN'));

// *********************maths*************************

console.log(Math);
console.log(Math.abs(-4)); // it makes negative value positive . i.e. absolute value of 5 and -5 is same=5.
console.log(Math.round(4.3));  // round off
console.log(Math.ceil(4.2));
console.log(Math.floor(4.6));
console.log(Math.sqrt(24).toFixed(2));
console.log(Math.min(-4,3,6,7));//math.max for finding max value
console.log(Math.pow(2,5));
console.log(Math.random()); /// it gives value between 0-1
console.log(Math.floor(Math.random()*10 )+1);//gives value between 1-9 i.e. above 1

const min =10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min);  // +min because we need atleast 10// +1 to avoid 0 case