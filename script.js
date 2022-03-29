let playerChoice = ''

const gameResult = document.querySelector('section.result p')

const playerOptions = document.querySelectorAll('section.content img')

const playerScore = document.querySelector('section.header .score .player')
const computerScore = document.querySelector('section.header .score .computer')

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
        outcome = `You win! ${playerChoice} beats ${computerChoice}.`
    } else {
        outcome = `You lose! ${computerChoice} beats ${playerChoice}.`
    }
    return outcome
}

function playGame(rounds) {
    const computerChoice = computerPlay()
    outcome = playRound(computerChoice, playerChoice)
    if(outcome.includes('win')) {
        playerScore.textContent = String((+playerScore.textContent)+1)
    } else if(outcome.includes('lose')) {
        computerScore.textContent = String((+computerScore.textContent)+1)
    }
    gameResult.textContent = outcome
    playerChoice = ''
}


