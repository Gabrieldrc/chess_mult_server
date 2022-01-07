const PieceFactory = require("../../core/PieceFactory");

module.exports = class Chess {
    _board;

    newGame() {
        this.board = [];
        const boardLength = 8
        for (let i = 0; i < boardLength; i++) {
            this.board.push([])
            for (let j = 0; j < boardLength; j++) {
                if (i == 0) {
                    if (j == 0 || j == boardLength - 1) {
                        this.board[i][j] = PieceFactory.getPiece('ROOK', 2, i, j);
                    }
                    if (j == 1 || j == boardLength - 2) {
                        // Caballo
                        this.board[i][j] = PieceFactory.getPiece('KNIGHT', 2, i, j);
                    }
                    if (j == 2 || j == boardLength - 3) {
                        // Alfil
                        this.board[i][j] = PieceFactory.getPiece('BISHOP', 2, i, j);
                    }
                    if (j == 3) {
                        // Rey
                        this.board[i][j] = PieceFactory.getPiece('KING', 2, i, j);
                    }
                    if (j == 4) {
                        // Reina
                        this.board[i][j] = PieceFactory.getPiece('QUEEN', 2, i, j);
                    }
                    else {
                        this.board[i][j] = PieceFactory.getPiece();
                    }
                } else if (i == 1) {
                    this.board[i][j] = new Pawn(2, i, j);
                } else if (i == boardLength - 2) {
                    this.board[i][j] = new Pawn(1, i, j);
                } else if (i == boardLength - 1) {
                    if (j == 0 || j == boardLength - 1) {
                        this.board[i][j] = PieceFactory.getPiece('ROOK', 1, i, j);
                    }
                    if (j == 1 || j == boardLength - 2) {
                        // Caballo
                        this.board[i][j] = PieceFactory.getPiece('KNIGHT', 2, i, j);
                    }
                    if (j == 2 || j == boardLength - 3) {
                        // Alfil
                        this.board[i][j] = PieceFactory.getPiece('BISHOP', 2, i, j);
                    }
                    if (j == 3) {
                        // Rey
                        this.board[i][j] = PieceFactory.getPiece('KING', 2, i, j);
                    }
                    if (j == 4) {
                        // Reina
                        this.board[i][j] = PieceFactory.getPiece('QUEEN', 2, i, j);
                    }
                    else {
                        this.board[i][j] = PieceFactory.getPiece();
                    }
                } else {
                    this.board[i][j] = PieceFactory.getPiece();
                }
            }
        }
    }

    move(x1, y1, x2, y2) {
        if (this.board[x1][y1].canMove(this.board, x2, y2)) {
            this.board[x1][y1].move(x2, y2);
            this.board[x2][y2] = this.board[x1][y1]
            this.board[x1][y1] = PieceFactory.getPiece();

            return this.board
        }
        return
    }

    getBoardData() {
        let data = []
        for (let i = 0; i < this.board.length; i++) {
            data.push([])
            for (let j = 0; j < this.board[i].length; j++) {
                data[i].push(this.board[i][j].getData(this.board))
            }
        }
        return data
    }
    get board() {
        return this._board;
    }

    set board(value) {
        this._board = value;
    }
}