const ChessPieceAbstract = require("../ChessPieceAbstract");

module.exports = class Rook extends ChessPieceAbstract {


    constructor(player, x, y) {
        super(player, 'rook', x, y);
    }

    canMove(board, x, y) {
        if (this.x !== x && this.y !== y) {
            return false
        }
        if (this.x === x && this.y !== y) {
            for (let i = 0; i < board[x].length; i++) {
                if (y > this.y && i > this.y && i < y) {
                    if (!(board[x][i].name === '')) {
                        return false;
                    }
                }
                if (y < this.y && i > y && i < this.y) {
                    if (!(board[x][i].name === '')) {
                        return false;
                    }
                }
            }
        } else if (this.y === y && this.x !== x) {
            for (let i = 0; i < board.length; i++) {
                if (x > this.x && i > this.x && i < x) {
                    if (!(board[i][y].name === '')) {
                        return false;
                    }
                }
                if (x < this.x && i > x && i < this.x) {
                    if (!(board[i][y].name === '')) {
                        return false;
                    }
                }
            }
        }
        if (!(board[x][y].name === '') && board[x][y].player === this.player) {
            return false;
        }
        return true;
    }
}