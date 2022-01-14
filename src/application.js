const GameFactoy = require("./core/GameFactoy");
let game
module.exports = (socket) => {
    socket.on('newGame', (gameName) => {
        game = GameFactoy.getGame(gameName)
        game.newGame()
        socket.emit('newGame', game.getBoardData())
    })
    socket.on('play', data => {
        const {from, to} = data
        game.move(from.i, from.j, to.i, to.j)
        socket.emit('update', game.getBoardData())
    })
}