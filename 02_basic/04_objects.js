// const tinderUser= new Object();

const tinderUser={}
tinderUser.id="acs123"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const reguleruser={
    email: "somes@gmail.com",
    fullName:{
        userName:{
            firstName:"shivam",
            lastName:"karma"
        }
    }
}
// console.log(reguleruser.fullName.userName.firstName);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}
// const obj1={1:"a",3:"b"}
// const obj2={3:"a",1:"b"}

// const obj3={ obj1, obj2}
// const obj3=Object.assign({},obj1,obj2,obj4)
// in assign we pass empty object as a parameter it is recomendation and here first parameter is source and second one is target 
// **** read some properties of assign at the revision time and this property not mostly in use*****//

const obj3={ ...obj1, ...obj2}
// mostly at the place of assign function we use spread "it is 90% use" spread is easiar than assign() AND reccommended 
// console.log(obj3);

const   users=[
    {
        id:1,
        email:"sk@gmail.com"
    } ,
    {
        id:1,
        email:"sk@gmail.com"
    },
    {
        id:1,
        email:"sk@gmail.com"
    }
]
// console.log(users[1].email);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser))

// // by using keys and values we get only keys and only values  

// console.log(Object.entries(tinderUser));
// // entries convert keys values into array it is rarely use

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// hasOwnProperty is used check that property object has or not

const course = {
    courseName:"js in hindi",
    price:"999",
    courseInstructor:"Hitesh"
}
// course.courseInstructor

// const {courseInstructor}=course
// console.log(courseInstructor);
const {courseInstructor: instructor}=course
// console.log(instructor);

//  {
//     "name":"hitesh"
//     "coursename": "js in hindi"
//     "fee": "free"
//  }

// [
//     {},
//     {},
//     {}
// ]