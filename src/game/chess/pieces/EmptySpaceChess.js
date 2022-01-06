const ChessPieceAbstract = require("../ChessPieceAbstract");

module.exports = class EmptySpaceChess extends ChessPieceAbstract {

    constructor() {
        super(0, '', -1, -1);
    }

    move(x, y) {}

    canMove(board, x, y) { return false}
}