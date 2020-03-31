import isYes from './is-yes.js';

const quizButton = document.getElementById('quiz-button');

let result = document.getElementById('result');

let scoreMessage = document.getElementById('quiz-score-message');


function launchQuiz() {
    let correctAnswers = 0;
    let name = '';

    alert('Hey! Welcome to my quiz! Are you ready???');

    const confirmed = confirm('Are you sure about that?');
    if (confirmed === false) {
        return;
    }

    const firstName = prompt("What's your first name?");
    name = firstName;

    const lastName = prompt("What's your last name?");
    name = name + ' ' + lastName;

    const isLeo = prompt(`${name}, is Leo my dog's name?`);

    const isOnion = prompt(`${name}, are onions my least favorite food?`);

    const toChina = prompt(`${name}, have I been to The Great Wall of China?`);

    if (isYes(isLeo) === true) {
        correctAnswers++;
    }

    if (isYes(isOnion) === true){
        correctAnswers++;

        if (isYes(toChina) === true) {
            correctAnswers++;
        }
    }

    let response = 'Your name is ' + name;

    if (correctAnswers >= 1) {
        response += ' and you are a very attentive reader!';
    }
    else {
        response += ' and you need to learn how to read! Damn!';
    }

    result.textContent = response;

    scoreMessage.textContent = `Okay ${name}, you got ${correctAnswers}/3`;

    let scoreStyle = document.getElementById('score-style');

    if (correctAnswers >= 1) {
        scoreStyle.style.color = 'green';
    }
    else {
        scoreStyle.style.color = 'red';
    }
}

quizButton.addEventListener('click', launchQuiz);



