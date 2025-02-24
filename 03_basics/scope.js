//var c=300
let a =55

if(true){
    let a=10
    const b =20
    //console.log("inner a:",a);
    
    //var c =30 //var scope k bhar chle jata h
}
//console.log(a);
//console.log(b);
//console.log(c);


function one(){
    const username="hitesh"

    function two(){
        const website ="youtube"
        console.log(username);
    }
    //console.log(website);//-->parent cant use child function
    
    two()
}

//one()

if(true){
    const username ="hitesh"
    if(username ==="hitesh "){
        const website ="youtube"
        console.log(username+website);
        
    }
    // console.log(website);//error
    
}
//console.log(username);//error-->out of scope
 
//++++++++++++++++++ interesting ++++++++++++++++//

console.log( addOne(5));
function addOne(num){
    return num +1
}



//different way of making function  ..--> is case m hum function ko declaration s phele access ni kr payenge (hoisting)
addTwo(5) //-->error kuki humne function ko variable m hold kr dia h
const addTwo = function(num){
    return num+2
}
