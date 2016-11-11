'use strict';

// Where I test various scripts without having to go through the entire quiz

var userName = prompt('Welcome! What\'s your name?');
console.log('Your name is ' + userName);
alert('Greetings, ' + userName + '. Let\'s see how well you know me.');

var jsNameGetId = document.getElementById('writeName');
var jsNameCreateEl = document.createElement('p');
jsNameCreateEl.textContent = 'So, how did you do, ' + userName + '?';
jsNameGetId.append(jsNameCreateEl);

// var  = document.createTextNode ('Your answer was ' + sarcasmMuch);
var sarcasmMuch = prompt('Am I sarcastic?');
var jsSarcasmGetId = document.getElementById('writeSarcasm');
var jsSarcasmCreateEl = document.createElement('p');
jsSarcasmCreateEl.textContent = 'Your answer was ' + sarcasmMuch;
jsSarcasmGetId.append(jsSarcasmCreateEl);
