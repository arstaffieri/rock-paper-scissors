class Game {
  constructor(human, computer) {
    this.human = new Player(human,"🧍‍♀️")
    this.computer = new Player(computer, "💻")
    this.winner = null
    this.gamePicked = null
  }
  checkWinner() {
    if(this.human.choice === this.computer.choice) {
        this.winner = null
    } else if((this.human.choice === "paper" && this.computer.choice === "rock")
              || (this.human.choice === "scissors" && this.computer.choice === "paper")
              || (this.human.choice === "rock" && this.computer.choice === "scissors")
              || (this.human.choice === "rock" && this.computer.choice === "dinosaur")
              || (this.human.choice === "paper" && this.computer.choice === "alien")
              || (this.human.choice === "scissors" && this.computer.choice === "dinosaur")
              || (this.human.choice === "alien" && this.computer.choice === "scissors")
              || (this.human.choice === "alien" && this.computer.choice === "rock")
              || (this.human.choice === "dinosaur" && this.computer.choice === "alien")
              || (this.human.choice === "dinosaur" && this.computer.choice === "paper")) {
        this.human.winCounter()
        this.winner = "Human"
    } else {
        this.computer.winCounter()
        this.winner = "Computer"
    }
  }
  pickGame(gameType) {
    this.gamePicked = gameType
    if(this.gamePicked === 'classic') {
      var tokenArray = ["rock", "paper", "scissors"]
      this.computer.choice = tokenArray[Math.floor(Math.random() * tokenArray.length)]
    } else {
      var complexTokenArray = ["rock","paper", "scissors", "dinosaur", "alien"]
      this.computer.choice = complexTokenArray[Math.floor(Math.random() * complexTokenArray.length)]
    }
  }
  pickToken(token) {
    this.human.choice = token
  }
  clearGame() {
    this.human.choice = null
    this.computer.choice = null
    this.winner = null
  }
}
