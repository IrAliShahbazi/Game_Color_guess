m = 2;
s = 60;
var gamefinish=7;
function setting(){
     m = prompt("enter Minutes:");
     s = prompt("enter Seconds:");
     gamefinish=prompt("Enter the number of losses:");
    document.getElementById("span2").innerHTML=gameover+":"+gamefinish;
}
