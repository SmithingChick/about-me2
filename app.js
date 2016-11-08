'use strict';


console.log('Hello World!');

var userName = prompt('Welcome! What\'s your name?');
console.log('User name is ' + userName);

alert('Greetings, ' + userName + '. Let\'s see how well you know Sharon.');
console.log('Would you like to play a game?');

var sarcasmMuch = prompt('Is Sharon sarcastic?');
console.log('It\'s her first language.');

if (sarcasmMuch.toLowerCase() === 'yes' || sarcasmMuch.toLowerCase() === 'y' ) {
  alert('So you\'ve met her, then.');
} else if (sarcasmMuch.toLowerCase() === 'no' || sarcasmMuch.toLowerCase() === 'n' ){
  alert('Clearly, you\'ve never had a conversation with her, ' + userName + ' She\'s a punk rock chick from the Rust Belt. It\'s her first language.');
} else {
  alert('Dude! WTF is that? Yes or no. It\'s not that complicated');
}


var blackBirds = prompt('Does Sharon like large black birds like crows & ravens?');
console.log('*starts humming the Beatle\'s "Blackbird"*');

if (blackBirds.toLowerCase() === 'yes' || blackBirds.toLowerCase() === 'y' ) {
  alert('That\'s right. She regards them as something of a spirit animal.');
} else if (blackBirds.toLowerCase() === 'no' || blackBirds.toLowerCase() === 'n' ){
  alert('She certainly does! She regards them as something of a spirit animal.');
} else {
  alert('Dude! WTF is that? Yes or no. It\'s not that complicated');
}


var wombatFan = prompt('Does Sharon also love wombats?');
console.log('May the Wombat of Happiness shuffle through your underbrush.');

if (wombatFan.toLowerCase() === 'yes' || wombatFan.toLowerCase() === 'y' ) {
  alert('Yes indeed, ' + userName + '. She even has 2 stuffed wombats she considers her "pets". Their names are Watson & Wanda');
} else if (wombatFan.toLowerCase() === 'no' || wombatFan.toLowerCase() === 'n' ){
  alert('Oh, she does, ' + userName + '. She does. It\'s all North Dakota\'s fault.');
} else {
  alert('Dude! WTF is that? Yes or no. It\'s not that complicated');
}


var radioDJ = prompt('Was Sharon a college radio DJ?');
console.log('This request goes out to my boys at the BP on I-90');

if (radioDJ.toLowerCase() === 'yes' || radioDJ.toLowerCase() === 'y' ) {
  alert('Did you ever hear her show, ' + userName + '?');
} else if (radioDJ.toLowerCase() === 'no' || radioDJ.toLowerCase() === 'n' ){
  alert('She was! She DJ\'d on WERG in Erie, PA back in the early 90\'s');
} else {
  alert('Dude! WTF is that? Yes or no. It\'s not that complicated');
}


var heavyReader = prompt('Does Sharon hate to read?');
console.log('I like big books and I cannot lie.');

if (heavyReader.toLowerCase() === 'yes' || heavyReader.toLowerCase() === 'y' ) {
  alert('Wrong! Wrong! Wrong! You\'ve obviously never been to her apartment, ' + userName + '.');
} else if (heavyReader.toLowerCase() === 'no' || heavyReader.toLowerCase() === 'n' ){
  alert( 'She reads constantly! She even picked up an e-reader because she ran out of room in her apartment for more shelves.');
} else {
  alert('Dude! WTF is that? Yes or no. It\'s not that complicated');
}
