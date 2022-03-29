let playerChoice = ''

const computerChoiceElement = document.querySelector('section.computer .choice')

const playerOptions = document.querySelectorAll('section.content img')

playerOptions.forEach( option => option.addEventListener('click', (e) => {
    playerChoice = e.target.alt
    playGame()
}))


function computerPlay() { 
    const options = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return options.at(randomNumber)
}

function detectWinnerCondition(playerChoice) {
    winnerCondition = ''
    switch(playerChoice) {
        case "rock":
            winnerCondition = "paper"
            break
        case "paper":
            winnerCondition = "scissors"
            break
        case "scissors":
            winnerCondition = "rock"
            break
    }
    return winnerCondition
}

function playRound(computerChoice, playerChoice) {
    winnerCondition = detectWinnerCondition(computerChoice)
    outcome = ''
    if(playerChoice === computerChoice) {
        outcome = 'Tie game!'
    } else if(playerChoice === winnerCondition) {
        outcome = `You lose! ${playerChoice} beats ${computerChoice}.`
    } else {
        outcome = `You lose! ${computerChoice} beats ${playerChoice}.`
    }
    return outcome
}

function playGame(rounds) {
    const computerChoice = computerPlay()
    outcome = playRound(computerChoice, playerChoice)
    computerChoiceElement.textContent = outcome
    playerChoice = ''
}


