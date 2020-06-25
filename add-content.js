
function askUserName(){
    var internalUserName = prompt("What is your name?");
    /*The following if statement checks to see if the name request prompt was cancelled or no text was
    entered.  If either of those cases exist, a default generic name of "friend" is entered. */
    if ((internalUserName === null) || (internalUserName==='')) {
        internalUserName = 'friend';
    } 
    return internalUserName;
}

function timeOfDayGreeting(){
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
    return greeting;
}

function howIsUser(userName){
    var thoughtfulReply;
    var userOkayStatus = confirm("How are you doing, " + userName + "?  I hope you are doing okay;)")
    if (userOkayStatus == true) {
        thoughtfulReply = "I'm happy to hear that!  Keep having fun!";
    } else {
        thoughtfulReply = "I'm sorry to hear that... I hope one of these activities help you feel better!"    
    }
    return thoughtfulReply;
}

function addWelcomeMessage (user,greeting,conditionalReply){
    document.write('<h3>' + greeting + user + '!  ' + conditionalReply + '</h3>');
}

/*function calls*/
var visitorName = askUserName();
var goodDay = timeOfDayGreeting();
var wellWishes = howIsUser(visitorName);
addWelcomeMessage(visitorName,goodDay,wellWishes);
