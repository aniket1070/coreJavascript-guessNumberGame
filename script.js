'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 10;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.score').textContent = score;
// document.querySelector('.number').textContent = secretNumber;
console.log('number', secretNumber);
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log('number', secretNumber);
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start Guessing');
  //   document.querySelector('.message').textContent = 'Start Guessing';
  //   document.querySelector('.number').textContent = '?';
  displayNumber('?');
  document.querySelector('.guess').value = '';
});
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  if (!guess) {
    displayMessage('No Number is Entered');
    // document.querySelector('.message').textContent = 'No Number is Entered';
  }
  //   when player wins the game
  else if (guess === secretNumber) {
    // document.querySelector('.number').textContent = secretNumber;
    displayNumber(secretNumber);
    // document.querySelector('.message').textContent = 'Corrent Number';
    displayMessage('Correct Number');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //   when guess in wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Guess too high' : 'Guess too low');
      //   document.querySelector('.message').textContent =
      // guess > secretNumber ? 'Guess too high' : 'Guess too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('You Lost the game');
      //   document.querySelector('.message').textContent = 'You lost the game';
    }
  }
  //   when guess is high than the secret number
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Guess too high';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('.message').textContent = 'You lost the game';
  //     }
  //   }
  //   //   when guess is low then secret number
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Guess too low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('.message').textContent = 'You lost the game';
  //     }
  //   }
});
