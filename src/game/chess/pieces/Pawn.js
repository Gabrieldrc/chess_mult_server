const ChessPieceAbstract = require("../ChessPieceAbstract");

module.exports = class Pawn extends ChessPieceAbstract {
    /**
     * Construct a Pawn object
     * @param player :int. '1' for player 1 or '2' for player 2.
     * @param x :int. position on the x axis
     * @param y :int. position on the y axis
     */
    constructor(player, x, y) {
        super(player, 'pawn', x, y);
    }

    canMove(board, x, y) {
        if (this.y === y && board[x][y].name == '') {
            if (this.x - x == 1 && this.player == 1) {
                return true;
            }
            if (this.x - x == -1 && this.player == 2) {
                return true;
            }
        } else if (
            Math.abs(this.x - x) == 1 && Math.abs(this.y - y) == 1
            && board[x][y].player !== this.player && board[x][y].name !== ''
        ) {
            if (this.x - x == 1 && this.player == 1) {
                return true;
            }
            if (this.x - x == -1 && this.player == 2) {
                return true;
            }
        }
        return false;
    }
}