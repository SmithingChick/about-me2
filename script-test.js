'use strict';

// Where I test various scripts without having to go through the entire quiz

var userName = prompt('Welcome! What\'s your name?');
console.log('Your name is ' + userName);
alert('Greetings, ' + userName + '. Let\'s see how well you know me.');

var jsNameGetId = document.getElementById('writeName');
var jsNameCreateEl = document.createElement('p');
jsNameCreateEl.textContent = 'So, how did you do, ' + userName + '?';
jsNameGetId.append(jsNameCreateEl);

var  = document.createTextNode ('Your answer was ' + sarcasmMuch);
var jsNameGetId = document.getElementById('writeSarcasm');
var jsNameCreateEl = document.createElement('p');
jsNameCreateEl.textContent = 'So, how did you do, ' + userName + '?';
jsNameGetId.append(jsNameCreateEl);
