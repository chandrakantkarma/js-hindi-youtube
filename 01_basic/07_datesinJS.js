let mydate=new Date()
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// // console.log(Date());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toTimeString());
// console.log(typeof mydate);

// let createdmydate=new Date(2024,3,6)
// console.log(createdmydate.toDateString());

// let createdmydate=new Date(2024,3,6,5,3)
// console.log(createdmydate.toLocaleString());

// let createdmydate=new Date("2024-04-06")
let createdmydate=new Date("06-04-2024")
// console.log(createdmydate.toLocaleString());

let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(createdmydate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time...`

newDate.toLocaleString('Default',{
    weekday:"long"
})