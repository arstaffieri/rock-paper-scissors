

class Player {
  constructor(name, token) {
    this.name = name
    this.token = token
    this.wins = 0
    this.turn = false
  }
  takeTurn() {
    if(this.turn === false) {
      this.turn = true
    } else {
      this.turn = false
    }
  }
  winCounter() {
    this.wins = this.wins + 1
  }
}
