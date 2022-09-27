var newGame = new Game()
var chooseClassic = document.querySelector('.classic-section')
var chooseWeaponText = document.querySelector('.choose-weapon')
var classicPieces = document.querySelector('.classic-pieces')
var chooseComplex = document.querySelector('.complex-section')
var complexPieces = document.querySelector('.complex-pieces')
var rock = document.querySelector('#rock')
var paper = document.querySelector('#paper')
var scissors = document.querySelector('#scissors')
var alien = document.querySelector('#alien')
var dinosaur = document.querySelector('#dinosaur')
var chosenPieces = document.querySelector('.chosen-pieces')
var playerChoice = document.querySelector('#player-choice')
var computerChoice = document.querySelector('#computer-choice')
var humanScore = document.querySelector('#human-score')
var computerScore = document.querySelector('#computer-score')

//eventListeners
chooseClassic.addEventListener('click', showClassic)
chooseComplex.addEventListener('click', showComplex)
rock.addEventListener('click', playGame)
paper.addEventListener('click', playGame)
scissors.addEventListener('click', playGame)
alien.addEventListener('click', playGame)
dinosaur.addEventListener('click', playGame)

//functions
function showClassic() {
  chooseClassic.classList.add('hidden')
  chooseComplex.classList.add('hidden')
  chooseWeaponText.classList.remove('hidden')
  classicPieces.classList.remove('hidden')
  newGame.pickGame('classic')
}

function showComplex() {
  chooseClassic.classList.add('hidden')
  chooseComplex.classList.add('hidden')
  chooseWeaponText.classList.remove('hidden')
  classicPieces.classList.remove('hidden')
  complexPieces.classList.remove('hidden')
  newGame.pickGame('complex')
}

//Could make the game boards and then show and hide them.

function playGame(event) {
  newGame.human.choice = event.target.id
  playerChoice.innerHTML += `<img src="assets/${newGame.human.choice}.png">`
  computerChoice.innerHTML += `<img src="assets/${newGame.computer.choice}.png">`
  classicPieces.classList.add('hidden')
  complexPieces.classList.add('hidden')
  chosenPieces.classList.remove('hidden')
  newGame.checkWinner()
  if (newGame.winner === "Human") {
    chooseWeaponText.innerText = "The human wins!"
  } else if (newGame.winner === "Computer") {
    chooseWeaponText.innerText = "Welcome your robot overlords!"
  } else {
    chooseWeaponText.innerText = "It's a draw!"
  }
  humanScore.innerText = newGame.human.wins
  computerScore.innerText = newGame.computer.wins
  setTimeout(resetGame, 2000)
}

function resetGame() {
  newGame.clearGame()
  if (newGame.gamePicked === 'classic') {
    showClassic()
  } else {
    showComplex()
  }
  chosenPieces.classList.add('hidden')
  playerChoice.innerHTML = ""
  computerChoice.innerHTML = ""
  chooseWeaponText.innerText = "Choose your weapon!"
}
