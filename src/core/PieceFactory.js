const Rook = require('../game/chess/pieces/Rook')
const Pawn = require('../game/chess/pieces/Pawn')
const Knight = require('../game/chess/pieces/Knight')
const Queen = require('../game/chess/pieces/Queen')
const King = require('../game/chess/pieces/King')
const Bishop = require('../game/chess/pieces/Bishop')
const EmptySpaceChess = require('../game/chess/pieces/EmptySpaceChess')

module.exports = class PieceFactory {
    static getPiece(name, player, x, y) {
        switch (name) {
            case 'ROOK':
                return new Rook(player, x, y)
            case 'PAWN':
                return new Pawn(player, x, y)
            case 'KING':
                return new King(player, x, y)
            case 'QUEEN':
                return new Queen(player, x, y)
            case 'KNIGHT':
                return new Knight(player, x, y)
            case 'BISHOP':
                return new Bishop(player, x, y)
            default:
                return new EmptySpaceChess()
        }
    }

};