'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Guess 🎉'

// document.querySelector('.score').textContent = '13';
// document.querySelector('.highscore').textContent = '15';
// console.log(document.querySelector('.highscore').textContent);
// console.log(document.querySelector('.score').textContent);

// document.querySelector('.number').textContent = '23';
// document.querySelector('.guess').value = '15';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // if there is no guess
  if (!guess) {
    displayMessage('No number!');
  }
  // if the guess is correct
  else if (guess === secretNumber) {
    displayMessage('Correct Guess 🎉');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //if guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber? 'Too High 📈' : 'Too low 📉';
      displayMessage(guess > secretNumber? 'Too High 📈' : 'Too low 📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lose! 😢' );
      document.querySelector('.score').textContent = 0;
    }
  }
  // if the guess is high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High 📈';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lose! 😢';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // if the guess is low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low 📉';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lose! 😢';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
