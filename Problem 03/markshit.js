/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

var subject = 0;

if(subject >=90 && subject <=100){
    console.log("You got Golden A+")
}
else if(subject >=80 && subject <=89){
    console.log("You got A+")
}
else if(subject >=70 && subject <=79){
    console.log("You got A")
}
else if(subject >=60 && subject <=69){
    console.log("You got A-")
}
else if(subject >=50 && subject <=59){
    console.log("You got B")
}
else if(subject >=40 && subject <=49){
    console.log("You got C")
}
else if(subject >=0 && subject <=39){
    console.log("You failed. Better luck next Time :)")
}
else{
    console.log("Invalid number")
}