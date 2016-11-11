'use strict';

// Greetings
var userName = prompt('Welcome! What\'s your name?');
console.log('Your name is ' + userName);
alert('Greetings, ' + userName + '. Let\'s see how well you know me.');
console.log('Would you like to play a game?');
var jsNameGetId = document.getElementById('writeName');
var jsNameCreateEl = document.createElement('p');
jsNameCreateEl.textContent = 'So, how did you do, ' + userName + '?';
jsNameGetId.append(jsNameCreateEl);

var totalCorrect = 0;

// Question 1 - Sarcasm
var sarcasmMuch = prompt('Am I sarcastic?');
function sarcasm() {
  if (sarcasmMuch.toLowerCase() === 'yes' || sarcasmMuch.toLowerCase() === 'y' ) {
    alert('So you\'ve met me, then.');
    totalCorrect++;
  } else if (sarcasmMuch.toLowerCase() === 'no' || sarcasmMuch.toLowerCase() === 'n' ){
    alert('Clearly, you\'ve never had a conversation with me, ' + userName + '. I\'m a punk rock chick from the Rust Belt. We\'re not allowed to speak without a certain level of sarcasm.');
  } else {
    alert('Dude! WTF is that? Yes or no. It\'s not that complicated.');
  }
  console.log('It\'s my first language.');
}
sarcasm();
var jsSarcasmGetId = document.getElementById('writeSarcasm');
var jsSarcasmCreateEl = document.createElement('p');
jsSarcasmCreateEl.textContent = 'Your answer was ' + sarcasmMuch;
jsSarcasmGetId.append(jsSarcasmCreateEl);


//Question 2 - Birds
var blackBirds = prompt('Do I like large black birds like crows & ravens?');
function birds() {
  if (blackBirds.toLowerCase() === 'yes' || blackBirds.toLowerCase() === 'y' ) {
    alert('That\'s right. I regard them as something of a spirit animal.');
    totalCorrect++;
  } else if (blackBirds.toLowerCase() === 'no' || blackBirds.toLowerCase() === 'n' ){
    alert('I certainly do! I regard them as something of a spirit animal.');
  } else {
    alert('Dude! WTF is that? Yes or no. It\'s not that complicated.');
  }
  console.log('*starts humming the Beatle\'s "Blackbird"*');
}
birds();
var jsBirdsGetId = document.getElementById('writeBirds');
var jsBirdsCreateEl = document.createElement('p');
jsBirdsCreateEl.textContent = 'Your answer was ' + blackBirds;
jsBirdsGetId.append(jsBirdsCreateEl);


//Question 3 - Wombats
var wombatFan = prompt('Do I also love wombats?');
function wombat() {
  if (wombatFan.toLowerCase() === 'yes' || wombatFan.toLowerCase() === 'y' ) {
    alert('Yes indeed, ' + userName + '. I even have 2 stuffed wombats I consider my "pets". Their names are Watson & Wanda & they\'re adorable.');
    totalCorrect++;
  } else if (wombatFan.toLowerCase() === 'no' || wombatFan.toLowerCase() === 'n' ){
    alert('Oh, I do, ' + userName + '. I do. It\'s all North Dakota\'s fault.');
  } else {
    alert('Dude! WTF is that? Yes or no. It\'s not that complicated.');
  }
  console.log('May the Wombat of Happiness shuffle through your underbrush.');
}
wombat();
var jsWombatsGetId = document.getElementById('writeWombats');
var jsWombatsCreateEl = document.createElement('p');
jsWombatsCreateEl.textContent = 'Your answer was ' + wombatFan;
jsWombatsGetId.append(jsWombatsCreateEl);

// Question 4 - DJ
var radioDJ = prompt('Was I a college radio DJ?');
function radio() {
  if (radioDJ.toLowerCase() === 'yes' || radioDJ.toLowerCase() === 'y' ) {
    alert('Yep! My air name was Molly McQuire.');
    totalCorrect++;
  } else if (radioDJ.toLowerCase() === 'no' || radioDJ.toLowerCase() === 'n' ){
    alert('I was! I DJ\'d on WERG in Erie, PA back in the early 90\'s. Fun fact- WERG was the station for a different university than the one I was actually attending.');
  } else {
    alert('Dude! WTF is that? Yes or no. It\'s not that complicated.');
  }
  console.log('Nothin\' but the local DJ. Said she had a song to play. What came down from her foolin\' around gave us hope for a brand new day');
}
radio();
var jsRadioGetId = document.getElementById('writeRadio');
var jsRadioCreateEl = document.createElement('p');
jsRadioCreateEl.textContent = 'Your answer was ' + radioDJ;
jsRadioGetId.append(jsRadioCreateEl);

// Question 5 - Reading
var easyReader = prompt('Do I hate to read?');
function reader() {
  if (easyReader.toLowerCase() === 'yes' || easyReader.toLowerCase() === 'y' ) {
    alert('Wrong! Wrong! Wrong! You\'ve obviously never been to my apartment, ' + userName + '.');
    totalCorrect++;
  } else if (easyReader.toLowerCase() === 'no' || easyReader.toLowerCase() === 'n' ){
    alert( 'I read constantly! I even picked up an e-reader because I ran out of room in my apartment for more shelves.');
  } else {
    alert('Dude! WTF is that? Yes or no. It\'s not that complicated');
  }
  console.log('I like big books and I cannot lie.');
}
reader();
var jsReadGetId = document.getElementById('writeRead');
var jsReadCreateEl = document.createElement('p');
jsReadCreateEl.textContent = 'Your answer was ' + easyReader;
jsReadGetId.append(jsReadCreateEl);

// Question 6 - Teaching with 4 chances
var teachSemesters = 6;
function teaching() {
  for (var i = 4; i >= 1 && numberGuessInt !== teachSemesters; i--) {
    var numberGuess = prompt('How many semesters did I teach Jewelry/Metalsmithing at UND?');
    var numberGuessInt = parseInt(numberGuess);

    if (numberGuessInt === teachSemesters) {
      alert('That\'s right! I did!');
      totalCorrect++;
    } else if (numberGuessInt < teachSemesters) {
      alert('Not quite. I taught more than ' + numberGuess + '.');
    } else if (numberGuessInt > teachSemesters) {
      alert('Alas, I didn\'t teach quite that many.');
    } else {
      alert('I taught for 6 semesters & really loved it. ');
    }
    console.log('I loved it even when my students drove me to drink!');
  }
}
teaching();
var jsTeachGetId = document.getElementById('writeTeach');
var jsTeachCreateEl = document.createElement('p');
jsTeachCreateEl.textContent = 'Your answer was ' + teachSemesters;
jsTeachGetId.append(jsTeachCreateEl);

// Question 7 - Home with 6 chances
var cityA = ['erie', 'baltimore', 'union city', 'grand forks', 'salem', 'portland'];
function home() {
  var correct = false;
  for (var i = 5; i >= 0 && correct != true; i--) {
    var cityQ = prompt('Can you guess a city that I\'ve lived in? You have ' + (i + 1) + ' guesses.').toLowerCase();
    if (cityQ == cityA[0] || cityQ == cityA[1] || cityQ == cityA[2] || cityQ == cityA[3] || cityQ == cityA[4] || cityQ == cityA[5]) {
      alert('That\'s right!');
      totalCorrect++;
      correct = true;
    } else {
      alert('Nope. I\'ve never lived in ' + cityQ + '. I\'ve heard it\'s nice, though. Probably');
    }
    console.log('I did not die of cholera.');
    var jsCityGetId = document.getElementById('writeCity');
    var jsCityCreateEl = document.createElement('p');
    jsCityCreateEl.textContent = 'Your answer was ' + cityQ;
    jsCityGetId.append(jsCityCreateEl);
  }
  alert('I\'ve lived in Erie, PA; Baltimore, MD; Union City, PA; Grand Forks, ND; Portland, OR; and Salem, OR. I\'m currently in Portland & I love it!');
}
home();


var jsTotalGetId = document.getElementById('writeTotal');
var jsTotalCreateEl = document.createElement('p');
jsTotalCreateEl.textContent = 'You got ' + totalCorrect;
jsTotalGetId.append(jsTotalCreateEl);

// Total correct answers
if (totalCorrect === 6) {
  alert('You got every question right! You know me well. Possibly too well...');
} else if (totalCorrect >= 5) {
  alert('You got ' + totalCorrect + ' answers correct. We\'ve obviously hung out a few times.');
} else if (totalCorrect >= 3) {
  alert('You got ' + totalCorrect + ' answers correct. You knda sorta know me a bit.');
} else if (totalCorrect >= 1){
  alert('You got ' + totalCorrect + ' answers correct. You are confused.');
} else if (totalCorrect === 0){
  alert('You didn\'t get any correct answers. You haven\'t even met me. Admit it. You were looking for an entirely different person named Sharon Smith when you found this site');
} else {
  alert('Squirrel!');
}
// var jsTotalGetId = document.getElementById('writeTotal');
// var jsTotalCreateEl = document.createElement('p');
// jsTotalCreateEl.textContent = 'You got ' + totalCorrect;
// jsTotalGetId.append(jsTotalCreateEl);
