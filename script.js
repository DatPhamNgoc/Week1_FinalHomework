// javasript guess random numbers game. Pham Ngoc Dat
// I can't run code by jsbin.com, i running code on codepen.io //
var randomNum = Math.floor(Math.random() * 10)+1 ;
var turns = 5;
var hint = 'Guess a number,(1-10!)';
var passGuesses = [];
while (turns > 0) {

  var guess = parseInt(prompt(hint +
  ` You have   ${turns}  guesses left. Your previous guesses were:`+passGuesses));
  passGuesses.push(guess);
  if (isNaN(guess)) alert('Please, write a number');
  if (!guess) break;

  if (guess == randomNum) {
    output.innerHTML='CONGRATULATIONS. YOU WIN!';
    turns = 0;
  } else {
    hint = 'Sorry.';
    if (guess < randomNum) hint += `Your guess of ${guess} was too low. `;
    if (guess > randomNum) hint += `Your guess of ${guess} was too high. `;
    turns --;
  }
  if(turns==0 && guess != randomNum) output.innerHTML="GAME OVER";


}
result.innerHTML=randomNum;
used.innerHTML=passGuesses.join(",  ");
tries.innerHTML=passGuesses.length;



