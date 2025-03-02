//for in

const myObject={
    js:'javascript',
    cpp:'C++',
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming =["js","rb","py","java","cpp"]

for(const key in programming){
    console.log(programming[key]); //for values prograaming[key]  only key will give key of array i.e. index
}

//map k uper iterations nhi ho skta h