//for

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
// }


    

for (let i = 0; i < 10; i++) {
     const element = i;
     if(element==5){
     console.log("5 is best number");

     }
    
 console.log(element);
    }

    for (let i = 0; i <= 10; i++) {
        console.log(`outer loop,${i}`);
        
        for (let j = 0; j <=10; j++) {
         //console.log(`inner loop :${j} and inner loop: ${j}`);
        // console.log(i +"*"+j+"="+i*j);   //table
                  
        }
        
    }
    //break and continue
    for (let index = 1; index <= 20 ; index++) {
      if(index ==5){
        console.log(`detected 5`);
        continue   // it means ek bar maaf kro eg isme 5 print ni hoga
      }
        console.log(`value of index:${index}`);
        
    }
