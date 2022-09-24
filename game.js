class Game {
  constructor(human, computer) {
    this.human = new Player(human,"🧍‍♀️")
    this.computer = new Player(computer, "💻")
  }
  checkWinner() {
    if(this.human.choice === "rock" && this.computer.choice === "rock") {
      return "It's a draw!"
    } else if(this.human.choice === "paper" && this.computer.choice === "paper") {
        return "It's a draw!"
    } else if(this.human.choice === "scissors" && this.computer.choice === "scissors") {
        return "It's a draw!"
    } else if(this.human.choice === "alien" && this.computer.choice === "alien") {
        return "It's a draw!"
    } else if(this.human.choice === "dinosaur" && this.computer.choice === "dinosaur") {
        return "It's a draw!"
    } else if(this.human.choice === "paper" && this.computer.choice === "rock") {
        this.human.winCounter()
        return "The human wins!"
    } else if(this.human.choice === "scissors" && this.computer.choice === "paper") {
        this.human.winCounter()
        return "The human wins!"
    } else if(this.human.choice === "rock" && this.computer.choice === "scissors") {
        this.human.winCounter()
        return "The human wins!"
    } else if(this.human.choice === "rock" && this.computer.choice === "dinosaur") {
        this.human.winCounter()
        return "The human wins!"
    } else if(this.human.choice === "paper" && this.computer.choice === "alien") {
        this.human.winCounter()
        return "The human wins!"
    } else if(this.human.choice === "scissors" && this.computer.choice === "dinosaur") {
        this.human.winCounter()
        return "The human wins!"
    } else if(this.human.choice === "alien" && this.computer.choice === "scissors") {
        this.human.winCounter()
        return "The human wins!"
    } else if(this.human.choice === "alien" && this.computer.choice === "rock") {
        this.human.winCounter()
        return "The human wins!"
    } else if(this.human.choice === "dinosaur" && this.computer.choice === "alien") {
        this.human.winCounter()
        return "The human wins!"
    } else if(this.human.choice === "dinosaur" && this.computer.choice === "paper") {
        this.human.winCounter()
        return "The human wins!"
    } else {
        this.computer.winCounter()
        return "Welcome your robot overlords!"
    }
  }
  pickGame(gameType) {
    this.gamePicked = gameType
    if(this.gamePicked === 'simple') {
      var tokenArray = ["rock", "paper", "scissors"]
      this.computer.choice = tokenArray[Math.floor(Math.random() * tokenArray.length)]
    } else {
      var complexTokenArray = ["rock","paper", "scissors", "dinosaur", "alien"]
      this.computer.choice = complexTokenArray[Math.floor(Math.random() * complexTokenArray.length)]
    }
    console.log(this.computer.choice)
  }
  pickToken(token) {
    this.human.choice = token
    console.log(token)
  }
  // clearGame() {
  //   this.human.choice = ""
  //   this.computer.choice = ""
  //   this.gamePicked = ""
  // }
}
