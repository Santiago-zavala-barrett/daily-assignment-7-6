let number = 7
let guess = 0
while (guess != number) {
  guess = prompt('Guess a number between 1 and 10')
  if(guess < number){
  guess = prompt('Too small, guess another number between 1 and 10')
  }
  else if (guess > number){
    guess = prompt('Too large, guess another number between 1 and 10')
  }   
}
console.log('You won! Game has ended!')