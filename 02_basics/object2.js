//singleton
//const tinderUser=new Object()  //singleton 
const tinderUser={}  //non-singleton

tinderUser.id="123abc"
tinderUser.name="piyush"
tinderUser.isLoggedIn = false

//console.log(tinderUser);
const regularUser ={
    email:"piyush1@gmail.com",
    fullName: {
        userFullName :{
          firstName:"bhumika",
          lastName:"joshi"
        }
    }
}
//console.log(regularUser.fullName.userFullName.firstName);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

//const obj3={obj1,obj2}//...gives problem same as array k ander array
//const obj3 = Object.assign({},obj1,obj2)//one of the method to merge the array

const obj3={...obj1,...obj2}//spread operator
//console.log(obj3);
const users =[
  {
    id:1,
    email:"b@gmail.com"
  },
  {

  },

  {

  },{

  }
]

// users[1].email;
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));//imp
// console.log(Object.values(tinderUser));//output->array
// console.log(Object.entries(tinderUser));//har key value ko array m bna dete h

//console.log(tinderUser.hasOwnProperty("isLoggedIn"));//question puchne k liye h but ye method syd ab function ni h i.e. not in use


//json-->java script object notation 
const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor // -->access

//const {courseInstructor } =course
//object destructure:
const {courseInstructor:instructor } =course


//console.log(courseInstructor);
console.log(instructor);

const navbar = () => {

}

//api,(json-->key:value dono string hoti h ...numbers and true/false ko chd k)
// {
//   "naame":"bhumika",
//   "coursename":"js in hindi ",
//   "price":"free"
// }

[
  {},
  {},
  {}
]



