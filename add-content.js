var user = prompt("What is your name?", "friend")

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening, ';
} else if (hourNow > 12) {
    greeting = 'Good afternoon, ';
} else if (hourNow > 0) {
    greeting = 'Good morning, ';
} else {
    greeting = 'Welcome, ';
}

var txt;
var r = confirm("How are you doing, " + user + "?  I hope you are doing okay;)")
if (r == true) {
    txt = "I'm happy to hear that!  Keep having fun!";
} else {
    txt = "I'm sorry to hear that... I hope one of these activities help you feel better!"    
}

document.write('<h3>' + greeting + user + '!  ' + txt + '</h3>');