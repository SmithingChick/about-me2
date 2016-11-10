'use strict';

// Greetings
var userName = prompt('Welcome! What\'s your name?');
console.log('Your name is ' + userName);
alert('Greetings, ' + userName + '. Let\'s see how well you know me.');
console.log('Would you like to play a game?');
var totalCorrect = 0;

// Question 1 - Sarcasm
function sarcasm() {
  var sarcasmMuch = prompt('Am I sarcastic?');
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

//Question 2 - Birds
function blackBirds() {
  var blackBirds = prompt('Do I like large black birds like crows & ravens?');
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
blackBirds();

//Question 3 - Wombats
function wombat() {
  var wombatFan = prompt('Do I also love wombats?');
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

// Question 4 - DJ
function radio() {
  var radioDJ = prompt('Was I a college radio DJ?');
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

// Question 5 - Reading
function reader() {
  var heavyReader = prompt('Do I hate to read?');
  if (heavyReader.toLowerCase() === 'yes' || heavyReader.toLowerCase() === 'y' ) {
    alert('Wrong! Wrong! Wrong! You\'ve obviously never been to my apartment, ' + userName + '.');
    totalCorrect++;
  } else if (heavyReader.toLowerCase() === 'no' || heavyReader.toLowerCase() === 'n' ){
    alert( 'I read constantly! I even picked up an e-reader because I ran out of room in my apartment for more shelves.');
  } else {
    alert('Dude! WTF is that? Yes or no. It\'s not that complicated');
  }
  console.log('I like big books and I cannot lie.');
}
reader();

// Wednesday Lab Additions
// Number Guess

// Question 6 - Teaching
function teaching() {
  var teachSemesters = 6;

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

// Question 7 - Home
function home() {
  var cityA = ['erie', 'baltimore', 'union city', 'grand forks', 'salem', 'portland'];
  var correct = false;
  for (var i = 5; i >= 0 && correct != true; i--) {
    var cityQ = prompt('Can you guess a city that I\'ve lived in? You have ' + (i + 1) + ' guesses.').toLowerCase();
    if (cityQ == cityA[0] || cityQ == cityA[1] || cityQ == cityA[2] || cityQ == cityA[3] || cityQ == cityA[4] || cityQ == cityA[5]) {
      alert('That\'s right!');
      totalCorrect++;
      correct = true;
    } else {
      alert('Nope. I\'ve never lived in ' + cityQ);
    }
    console.log('I did not die of cholera.');
  }
  alert('I\'ve lived in Erie, PA; Baltimore, MD; Union City, PA; Grand Forks, ND; Portland, OR; and Salem, OR. I\'m currently in Portland & I love it!');
}
home();

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
