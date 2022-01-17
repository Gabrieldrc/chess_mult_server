const GameFactoy = require("./core/GameFactoy");
// let game
let state = new Map()
let clientRooms = new Map()

module.exports = (socket, io) => {
    socket.on('newGame', handleNewGame)
    socket.on('play', handlePlay)
    socket.on('joinGame', handleJoinGame)
    function handleNewGame(gameName) {
        let roomName = "1"
        clientRooms.set(socket.id, roomName)
        socket.emit('gameCode', roomName)
        const game = GameFactoy.getGame(gameName)
        game.newGame()
        state.set(roomName, game)
        socket.join(roomName)
        socket.number = 1
        socket.emit('init', game.getBoardData(), 1)
    }
    function handlePlay(data, roomName) {
        const {from, to} = data
        const game = state.get(roomName)
        game.move(from.i, from.j, to.i, to.j)
        if (game.getWinner() != 0) {
            socket.to(roomName).emit('winner', game.getWinner())
            socket.emit('winner', game.getWinner())
        } else {
            socket.to(roomName).emit('gameState', game.getBoardData())
            socket.emit('gameState', game.getBoardData())
        }
    }
    function handleJoinGame(roomName) {
        clientRooms.set(socket.id, roomName)

        socket.join(roomName)
        socket.number = 2
        const game = state.get(roomName)
        socket.emit('init', game.getBoardData(), 2)
        socket.emit('gameCode', roomName)
    }
}