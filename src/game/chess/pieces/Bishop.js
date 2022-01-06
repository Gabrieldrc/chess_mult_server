const ChessPieceAbstract = require('../ChessPieceAbstract')
module.exports = class Bishop extends ChessPieceAbstract {

    constructor(player, x, y) {
        super(player, 'bishop', x, y);
    }


    canMove(board, x, y) {
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
            console.log('i j x y tx ty dx dy', i, j, x, y, this.x, this.y, directionX, directionY)
            if (board[i][j].name !== '') {

                return false
            }
            i += directionX
            j += directionY
        }

        return true
    }
}