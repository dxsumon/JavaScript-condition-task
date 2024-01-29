/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

var myNumber = 70;

if(myNumber >=80){
    var myFriendNumber = 70;
    if(myFriendNumber >= 80 && myFriendNumber <=100){
        console.log("let's go for lunch");
    }
    else if(myFriendNumber >= 60 && myFriendNumber <=70){
        console.log("Don't worry my friend better luck next time:) ");
    }
    else if(myFriendNumber >= 40 && myFriendNumber <= 59){
        console.log("Keep your friend massage unseen");
    }
    else if(myFriendNumber >=0 && myFriendNumber<=39){
        console.log("Block your friend");
    }else{
        console.log("");
    }
}
else if(myNumber<=79){
    console.log("I'm sad don't sent me massage")
}