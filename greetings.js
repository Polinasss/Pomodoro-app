const greetings = document.querySelector('.greetings');

const date = new Date();
const hours = date.getHours();

let dayTime = '';
let hello = 'Доброе ';

if (hours >= 5 && hours < 12) {
    dayTime = 'утро,';
} else if (hours >= 12 && hours < 17) {
    dayTime = 'день,';
    hello = 'Добрый ';
} else if (hours >= 17 && hours < 23) {
    dayTime = 'вечер,';
    hello = 'Добрый ';
} else {
    dayTime = 'ночи,';
    hello = 'Доброй ';
}

greetings.textContent = hello + dayTime;

let input = document.createElement('input');
input.type = 'text';
input.size = 15;
greetings.append(input);