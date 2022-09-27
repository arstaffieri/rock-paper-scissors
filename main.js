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
var changeButton = document.querySelector('#change-button')
var timeOut = null

//eventListeners
chooseClassic.addEventListener('click', showClassic)
chooseComplex.addEventListener('click', showComplex)
rock.addEventListener('click', selectPiece)
paper.addEventListener('click', selectPiece)
scissors.addEventListener('click', selectPiece)
alien.addEventListener('click', selectPiece)
dinosaur.addEventListener('click', selectPiece)
changeButton.addEventListener('click', changeGame)

//functions
function showClassic() {
  chooseClassic.classList.add('hidden')
  chooseComplex.classList.add('hidden')
  chooseWeaponText.classList.remove('hidden')
  chooseWeaponText.innerText = "Choose your weapon!"
  classicPieces.classList.remove('hidden')
  changeButton.classList.remove('hidden')
  newGame.pickGame('classic')
}

function showComplex() {
  chooseClassic.classList.add('hidden')
  chooseComplex.classList.add('hidden')
  chooseWeaponText.classList.remove('hidden')
  chooseWeaponText.innerText = "Choose your weapon!"
  classicPieces.classList.remove('hidden')
  complexPieces.classList.remove('hidden')
  changeButton.classList.remove('hidden')
  newGame.pickGame('complex')
}

//Could make the game boards and then show and hide them.

function selectPiece(event) {
  newGame.human.choice = event.target.id
  playerChoice.innerHTML += `Player chooses <img src="assets/${newGame.human.choice}.png">`
  computerChoice.innerHTML += `Computer chooses <img src="assets/${newGame.computer.choice}.png">`
  changeButton.classList.remove('hidden')
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
  timeOut = setTimeout(resetGame, 2000)
}

function resetGame() {
  newGame.clearGame()
  changeButton.classList.remove('hidden')
  if (newGame.gamePicked === 'classic') {
    showClassic()
  } else {
    showComplex()
  }
  chosenPieces.classList.add('hidden')
  playerChoice.innerHTML = ""
  computerChoice.innerHTML = ""
}

function changeGame() {
  clearTimeout(timeOut)
  newGame.clearGame()
  playerChoice.innerHTML = ""
  computerChoice.innerHTML = ""
  chooseWeaponText.classList.add('hidden')
  chooseClassic.classList.remove('hidden')
  chooseComplex.classList.remove('hidden')
  classicPieces.classList.add('hidden')
  complexPieces.classList.add('hidden')
  chosenPieces.classList.add('hidden')
  changeButton.classList.add('hidden')
}
