'use strict';

// Greetings
var userName = prompt('Welcome! What\'s your name?');
console.log('Your name is ' + userName);
alert('Greetings, ' + userName + '. Let\'s see how well you know Sharon.');
console.log('Would you like to play a game?');

// Questions
var sarcasmMuch = prompt('Is Sharon sarcastic?');
if (sarcasmMuch.toLowerCase() === 'yes' || sarcasmMuch.toLowerCase() === 'y' ) {
  alert('So you\'ve met her, then.');
} else if (sarcasmMuch.toLowerCase() === 'no' || sarcasmMuch.toLowerCase() === 'n' ){
  alert('Clearly, you\'ve never had a conversation with her, ' + userName + '. She\'s a punk rock chick from the Rust Belt. I don\'t think they\'re allowed to speak without a certain level of sarcasm.');
} else {
  alert('Dude! WTF is that? Yes or no. It\'s not that complicated');
}
console.log('It\'s her first language.');

var blackBirds = prompt('Does Sharon like large black birds like crows & ravens?');
if (blackBirds.toLowerCase() === 'yes' || blackBirds.toLowerCase() === 'y' ) {
  alert('That\'s right. She regards them as something of a spirit animal.');
} else if (blackBirds.toLowerCase() === 'no' || blackBirds.toLowerCase() === 'n' ){
  alert('She certainly does! She regards them as something of a spirit animal.');
} else {
  alert('Dude! WTF is that? Yes or no. It\'s not that complicated');
}
console.log('*starts humming the Beatle\'s "Blackbird"*');

var wombatFan = prompt('Does Sharon also love wombats?');
if (wombatFan.toLowerCase() === 'yes' || wombatFan.toLowerCase() === 'y' ) {
  alert('Yes indeed, ' + userName + '. She even has 2 stuffed wombats she considers her "pets". Their names are Watson & Wanda');
} else if (wombatFan.toLowerCase() === 'no' || wombatFan.toLowerCase() === 'n' ){
  alert('Oh, she does, ' + userName + '. She does. It\'s all North Dakota\'s fault.');
} else {
  alert('Dude! WTF is that? Yes or no. It\'s not that complicated.');
}
console.log('May the Wombat of Happiness shuffle through your underbrush.');

var radioDJ = prompt('Was Sharon a college radio DJ?');
if (radioDJ.toLowerCase() === 'yes' || radioDJ.toLowerCase() === 'y' ) {
  alert('Did you ever hear her show, ' + userName + '?');
} else if (radioDJ.toLowerCase() === 'no' || radioDJ.toLowerCase() === 'n' ){
  alert('She was! She DJ\'d on WERG in Erie, PA back in the early 90\'s');
} else {
  alert('Dude! WTF is that? Yes or no. It\'s not that complicated');
}
console.log('This request goes out to my boys at the BP on I-90');

var heavyReader = prompt('Does Sharon hate to read?');
if (heavyReader.toLowerCase() === 'yes' || heavyReader.toLowerCase() === 'y' ) {
  alert('Wrong! Wrong! Wrong! You\'ve obviously never been to her apartment, ' + userName + '.');
} else if (heavyReader.toLowerCase() === 'no' || heavyReader.toLowerCase() === 'n' ){
  alert( 'She reads constantly! She even picked up an e-reader because she ran out of room in her apartment for more shelves.');
} else {
  alert('Dude! WTF is that? Yes or no. It\'s not that complicated');
}
console.log('I like big books and I cannot lie.');


// Wednesday Lab Additions
// Number Guess

var numberGuess = prompt('How many semesters did Sharon teach Jewelry/Metalsmithing at UND?');
var numberGuessI = parseInt(numberGuess);
var teachSemesters = 6;

if (numberGuessI === teachSemesters) {
  alert('That\'s right! She did!');
} else if (numberGuessI < teachSemesters) {
  alert('Not quite. She taught more than ' + numberGuess + '.');
} else if (numberGuessI > teachSemesters) {
  alert('Alas, Sharon didn\'t teach quite that many');
} else {
  alert('That\'s not a number, silly!');
}
console.log('You guessed ' + numberGuessI + '. She taught for ' + teachSemesters + ' semesters. She loved it!');
