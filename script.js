function computerPlay() { 
    const options = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return options.at(randomNumber)
}

function playerPlay() {
    const playerChoice = prompt("Enter Rock, Paper, or Scissors: ").toLowerCase()
    return playerChoice
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

    if(playerChoice === computerChoice) {
        console.log('Tie game!')
    } else if(playerChoice === winnerCondition) {
        console.log('You win! %s beats %s', playerChoice, computerChoice)
    } else {
        console.log('You lose! %s beats %s', computerChoice, playerChoice)
    }
}

function playGame(rounds) {
    roundsPlayed = 0


    while (roundsPlayed < 5) {
        const computerChoice = computerPlay()
        const playerChoice = playerPlay()
        playRound(computerChoice, playerChoice)
        roundsPlayed += 1
    }
}


playGame(5)

const hand = document.querySelector("div.paper")
print(hand)

function changeColor(e) {
    this.style.background = 'green'
}

hand.addEventListener('mouseOver', () => hand.classList.add('green-background'))