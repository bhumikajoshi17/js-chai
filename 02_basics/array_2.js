const marvelHeroes =["thor","Ironman","spiderman"]
const dcHeroes =["superman", "flash", "batman"]

//marvelHeroes.push(dcHeroes)  // marvelheroes vali array m dchero array as a element dikhegi

//console.log(marvelHeroes);
//console.log(marvelHeroes[3][1]);

// const allHeroes=marvelHeroes.concat(dcHeroes) //isme dono array k elemnts add ho jayenge or 1 array bn jayegii
// console.log(allHeroes);

const all_newHeroes =[...marvelHeroes,...dcHeroes]
//console.log(all_newHeroes);//this method is spread operator works same as concat , syntax is ...

const anotherArray =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherArray=anotherArray.flat(Infinity)

console.log(realAnotherArray);

console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));
console.log(Array.from({name:"hitesh"}));  //interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));


