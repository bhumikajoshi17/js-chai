// Immediately Invoked Function Expressions (IIFE)

 (function chai (){ //named iife
    console.log(`DB Connected`);
 })();       //semicolon is imp here   //iife...syntax-> pure function m parenthesis and uske bhar ek parenthesis

//iife is used to remove global pollution 

 ( (name)=>{
     console.log(`DB Connected two ${name}`);
     
 })("bhumika") ;//first() -> to write func call 2nd ()->for execution

