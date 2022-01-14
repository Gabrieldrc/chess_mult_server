const PieceFactory = require("../../core/PieceFactory");

module.exports = class Chess {
    _board
    _turn

    constructor() {
        this._turn = Math.floor(Math.random() * 2 + 1)
    }

    newGame() {
        this.board = [];
        const boardLength = 8
        for (let i = 0; i < boardLength; i++) {
            this.board.push([])
            for (let j = 0; j < boardLength; j++) {
                if (i == 0) {
                    if (j == 0 || j == boardLength - 1) {
                        this.board[i].push(PieceFactory.getPiece('ROOK', 2, i, j));
                    } else if (j == 1 || j == boardLength - 2) {
                        // Caballo
                        this.board[i].push(PieceFactory.getPiece('KNIGHT', 2, i, j));
                    } else if (j == 2 || j == boardLength - 3) {
                        // Alfil
                        this.board[i].push(PieceFactory.getPiece('BISHOP', 2, i, j));
                    } else if (j == 3) {
                        // Rey
                        this.board[i].push(PieceFactory.getPiece('KING', 2, i, j));
                    } else if (j == 4) {
                        // Reina
                        this.board[i].push(PieceFactory.getPiece('QUEEN', 2, i, j));
                    } else {
                        this.board[i].push(PieceFactory.getPiece());
                    }
                } else if (i == 1) {
                    this.board[i].push(PieceFactory.getPiece('PAWN',2, i, j));
                } else if (i == boardLength - 2) {
                    this.board[i].push(PieceFactory.getPiece('PAWN',1, i, j));
                } else if (i == boardLength - 1) {
                    if (j == 0 || j == boardLength - 1) {
                        this.board[i].push(PieceFactory.getPiece('ROOK', 1, i, j));
                    } else if (j == 1 || j == boardLength - 2) {
                        // Caballo
                        this.board[i].push(PieceFactory.getPiece('KNIGHT', 1, i, j));
                    } else if (j == 2 || j == boardLength - 3) {
                        // Alfil
                        this.board[i].push(PieceFactory.getPiece('BISHOP', 1, i, j));
                    } else if (j == 3) {
                        // Rey
                        this.board[i].push(PieceFactory.getPiece('KING', 1, i, j));
                    } else if (j == 4) {
                        // Reina
                        this.board[i].push(PieceFactory.getPiece('QUEEN', 1, i, j));
                    }
                    else {
                        this.board[i].push(PieceFactory.getPiece());
                    }
                } else {
                    this.board[i].push(PieceFactory.getPiece());
                }
            }
        }
    }

    move(x1, y1, x2, y2) {
        if (this.turn !== this.board[x1][y1].player) {
            return false
        }
        if (this.board[x1][y1].canMove(this.board, x2, y2)) {
            this.board[x1][y1].move(x2, y2);
            this.board[x2][y2] = this.board[x1][y1]
            this.board[x1][y1] = PieceFactory.getPiece();
            this._turn = this._turn == 1 ? 2 : 1

            return true
        }
        return false
    }

    getBoardData() {
        let data = []
        for (let i = 0; i < this.board.length; i++) {
            data.push([])
            for (let j = 0; j < this.board[i].length; j++) {
                data[i].push(this.board[i][j].getData(this.board))
            }
        }
        return {
            turn: this._turn,
            board: data
        }
    }
    get board() {
        return this._board;
    }

    set board(value) {
        this._board = value;
    }

    get turn() {
        return this._turn;
    }

    getWinner() {
        const kings = []
        let winner = 0
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {
                if (this.board[i][j].name == 'king') {
                    kings.push(this.board[i][j])
                }
            }
        }
        if (kings.length == 1) {
            winner = kings[0].player
        }
        return winner
    }
}