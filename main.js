var newGame = new Game("human", "computer")
var newGame1 = new Game("human", "computer")
var newGame2 = new Game("human", "computer")
var newGame3 = new Game("human", "computer")


// function weaponPicker() {
//   console.log("Pick your game! - simple or complex")
//   newGame.human.takeTurn()
//
// }
//
// weaponPicker()

// Player gets two choices - simple game or complex game. The player picks one.
// The player picks a token.
// One of them wins. Winner is displayed.
newGame.pickGame("simple")
newGame.pickToken("rock")
console.log()
console.log(newGame.checkWinner())
console.log(newGame.human.wins)
console.log(newGame.computer.wins)
newGame1.pickGame("complex")
newGame1.pickToken("rock")
console.log()
console.log(newGame1.checkWinner())
console.log(newGame1.human.wins)
console.log(newGame1.computer.wins)
newGame.pickGame("simple")
newGame.pickToken("rock")
console.log()
console.log(newGame.checkWinner())
console.log(newGame.human.wins)
console.log(newGame.computer.wins)

newGame2.pickGame("complex")
newGame2.pickToken("scissors")
console.log()
console.log(newGame2.checkWinner())
console.log(newGame2.human.wins)
console.log(newGame2.computer.wins)

newGame3.pickGame("simple")
newGame3.pickToken("paper")
console.log()
console.log(newGame3.checkWinner())
console.log(newGame3.human.wins)
console.log(newGame3.computer.wins)


//
