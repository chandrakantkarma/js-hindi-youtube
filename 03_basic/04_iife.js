// Immediatly Invoked Function Expression(IIFE)

(function chai(){
    console.log("DB-CONNECTED");
})();
// NAMED IIFE
//AFTER THIS TYPE OF FUNCTION ";" IS COMPULSURRY


// ( function aurCode(){
//     console.log("DB TWO CONNECTED");
// })();


((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('shivam');
// SIMPLE IIFE
// globle scope ke polution se problem hoti he jise hatane ke liye "iife" ka use karte he

