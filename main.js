var newGame = new Game("human", "computer")


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
