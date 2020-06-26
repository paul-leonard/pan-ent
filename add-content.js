
function askUserName(){
    var internalUserName = prompt("What is your name? (four character minimum)");
    while(internalUserName.length<4){
        internalUserName = prompt('Please share with me your name. (four character minimum)')
    }
    return internalUserName;
}

/* I like the below name function better, but did the one above to meet assignment requirements.  Keeping the code
below for later, but this function is no longer called.  It is unused code. */
function askUsersName(){
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
        thoughtfulReply = "I'm happy to hear you're doing well!  Keep having fun!";
    } else {
        thoughtfulReply = "I'm sorry to hear that things are rough... I hope one of these activities help you feel better!"    
    }
    return thoughtfulReply;
}

function quickNumberGame() {
    var targetNumber = 3;
    var numberGuessed = prompt("Welcome to the website of online fun!  Let's start off with a game!  Guess a number between 1 and 10!");
        if (parseInt(numberGuessed)===targetNumber) {
            alert('Wow!  You got it on the first try!  Congrats!')
        } else {
            for (var i=0; i < 5; i++){
                numberGuessed = prompt("Take another guess!");
                if (parseInt(numberGuessed)===targetNumber) {
                    alert('Wow!  You got it!  Congrats!')
                    break;
                }
                if (i===4){
                    alert("You're not very good at this game... Let's find you a different one!")
                }
            }
        }
}

function addWelcomeMessage (user,greeting,conditionalReply){
    document.write('<h3>' + greeting + user + '!  ' + conditionalReply + '</h3>');
}

/*function calls*/
var visitorName = askUserName();
var goodDay = timeOfDayGreeting();
var wellWishes = howIsUser(visitorName);
addWelcomeMessage(visitorName,goodDay,wellWishes);
quickNumberGame();
