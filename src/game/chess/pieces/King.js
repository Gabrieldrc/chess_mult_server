const ChessPieceAbstract = require('../ChessPieceAbstract')

module.exports = class King extends ChessPieceAbstract {


    constructor(player, x, y) {
        super(player, 'king', x, y);
    }


    canMove(board, x, y) {
        if (
            Math.abs(this.x - x) <= 1 && Math.abs(this.y - y) <= 1
            && (
                board[x][y].name == ''
                ||
                (board[x][y].name != '' && board[x][y].player !== this.player)
            ) && !this.canBeEat(board, x, y)
        ) {

            return true
        }

        return false
    }

    canBeEat(board, x, y) {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j].name !== '' && board[i][j].player !== this.player) {
                    if (board[i][j].canMove(board, x, y)) {
                        return true
                    }
                }
            }
        }
        return false
    }
}