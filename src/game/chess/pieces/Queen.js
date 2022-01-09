const ChessPieceAbstract = require('../ChessPieceAbstract')

module.exports = class Queen extends ChessPieceAbstract {

    constructor(player, x, y) {
        super(player, 'queen', x, y);
    }

    canMove(board, x, y) {
        if (this.x == x || this.y == y) {
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

            return true
        }
        if (this.x !== x && this.y !== y) {
            if (!(Math.abs(this.x - x) === Math.abs(this.y - y))) {

                return false
            }
            if (board[x][y].name !== '' && board[x][y].player === this.player) {

                return false
            }
            let directionX = x > this.x ? 1 : -1
            let directionY = y > this.y ? 1 : -1
            let i = this.x + directionX
            let j = this.y + directionY
            while (i !== x && j !== y) {
                if (board[i][j].name !== '') {

                    return false
                }
                i += directionX
                j += directionY
            }

            return true
        }

        return false
    }
}