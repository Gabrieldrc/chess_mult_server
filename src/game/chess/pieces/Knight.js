const ChessPieceAbstract = require('../ChessPieceAbstract')

module.exports = class Knight extends ChessPieceAbstract {


    constructor(player, x, y) {
        super(player, 'knight', x, y);
    }

    canMove(board, x, y) {
        // if (Math.abs(this.x - x) === 1 && Math.abs(this.y - y) === 2) {
        //     return true
        // }
        if (
            (Math.abs(this.x - x) === 2 && Math.abs(this.y - y) === 1)
            || (Math.abs(this.x - x) === 1 && Math.abs(this.y - y) === 2)
        ) {
            if (board[x][y].name === ''
                || (board[x][y].name !== '' && board[x][y].player !== this.player)
            ) {
               return true
            }
        }

        return false
    }
}