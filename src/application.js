const GameFactoy = require("./core/GameFactoy");
let game
module.exports = (socket) => {
    socket.on('newGame', (gameName) => {
        game = GameFactoy.getGame(gameName)
        game.newGame()
        socket.emit('newGame', game.getBoardData())
    })
}