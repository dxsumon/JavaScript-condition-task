/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 8;
let student = false;

if(!!student){
    console.log("Students get a 50% discount")
}
else if (age < 10){
    console.log("Free")
}
else if (age >= 60 ){
    console.log(" 60+ years Get 15% discount")
}
else {
    console.log("Regular ticket fare 800 taka")
}