const randomNumber = Math.random();
const result = randomNumber < 0.5 ? 'heads' : 'tails';
let result2 = ''

let guess = 'heads';  
console.log(guess === result ? 'You win!' : 'You lose!');

document.getElementById('head-button').addEventListener('click', function() {
    guess = 'heads';  
    if (guess === result) {
        console.log('It\'s heads, you win!');
    } else {
        console.log('It\'s not heads, you lose.');
    }
});

document.getElementById('tails-button').addEventListener('click', function() {
    guess = 'tails';  
    if (guess === result) {
        console.log('It\'s tails, you win!');
    } else {
        console.log('It\'s not tails, you lose.');
    }
});

function playGame(guess){
    // let computerMove = ''
    if (guess === 'heads' && result === 'heads' ){
        result2 ='win'
    }else if ( guess === 'heads' && result === 'tails'){
        result2 = 'loss'
    }else if(guess === 'tails' && result === 'heads'){
        result2 = 'loss'
    }else if(guess === 'tails' && result === 'tails' ){
        result2 ='you win' 
    }

    if (result2 === ' you win'){
        score.win+=1
    }else if(result2 === 'loss'){
        score.losses+=1
    }

    alert(`you choose${guess}.coin result is ${result}.${result2}`)
}





const score = {
    wins : 0 , 
    losses : 0
}

f