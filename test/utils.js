const EmptySpaceChess = require('../src/game/chess/pieces/EmptySpaceChess')

function emptyBoard(size = 3) {
   let board = []
    for (let i = 0; i < size; i++) {
        board.push([])
        for (let j = 0; j < size; j++) {
            board[i].push(new EmptySpaceChess())
        }
    }
    return board
}

function createData(name, player, position, places) {
    return {
        name: name,
        player: player,
        position: position,
        placeCanMove: places
    }
}

function position(i, j) {
    return {
        i: i,
        j: j
    }
}
module.exports = {
    emptyBoard,
    createData,
    position,
}