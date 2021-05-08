// Connects "Guess" button to the "random" fuction
document.getElementById('button').addEventListener('click', randomizer)
let randomNumber = 0
let userGuess = 0

function randomizer () {
  // get number typed in by user and convert to an integer
  userGuess = document.getElementById('input').value
  userGuess = parseInt(userGuess)
  // generate random number between 1 and 6
  randomNumber = (Math.random() * 6) + 1
  randomNumber = parseInt(randomNumber)
  // Compare user's guess with random number
  if (userGuess === randomNumber) {
    document.getElementById('answer').innerHTML = 'You Win!'
  }
  if (userGuess !== randomNumber) {
    document.getElementById('answer').innerHTML = 'You Lose, Try Again!'
  }
}
