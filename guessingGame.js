// javasript guess random numbers game. Pham Ngoc Dat
var randomNum = Math.floor(Math.random() * 10) ;
var turns = 10;
var hint = 'Guess a number,(1-10!)';
var passGuesses = [];
while (turns > 0) {

  var guess = parseInt(prompt(hint +
  ' You have ' + turns + ' guesses left. Your previous guesses were:'+passGuesses ));
  passGuesses.push(guess);
  if (isNaN(guess)) alert('Please, write a number');
  if (!guess) break;
  if (guess == randomNum) {
    console.log('Congratulations.YOU WIN!');
    turns = 0;
  } else {
    hint = 'Sorry.';
    if (guess < randomNum) hint += 'Your guess of '+guess+' was too low. ';
    if (guess > randomNum) hint += 'Your guess of '+guess+' was too high. ';
    turns --;
  }

}
alert('The secret number was ' + randomNum + '.');
console.log('Previous guesses: '+passGuesses.join());
console.log('Times you have guessed: '+passGuesses.length);
console.log('GAME OVER. '+ ' Enter Run to try again!') ;


