const Pawn = require("./pieces/Pawn")
const Rook = require("./pieces/Rook")
const EmptySpaceChess = require("./pieces/EmptySpaceChess");

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
                        this.board[i][j] = new Rook(2, i, j);
                    }
                    // if (j == 1 || j == boardLength - 2) {
                    //     // Caballo
                    // }
                    // if (j == 2 || j == boardLength - 3) {
                    //     // Alfil
                    // }
                    // if (j == 3) {
                    //     // Rey
                    // }
                    // if (j == 4) {
                    //     // Reina
                    // }
                    else {
                        this.board[i][j] = new EmptySpaceChess(i, j);
                    }
                } else if (i == 1) {
                    this.board[i][j] = new Pawn(2, i, j);
                } else if (i == boardLength - 2) {
                    this.board[i][j] = new Pawn(1, i, j);
                } else if (i == boardLength - 1) {
                    if (j == 0 || j == boardLength - 1) {
                        this.board[i][j] = new Rook(1, i, j);
                    }
                    // if (j == 1 || j == boardLength - 2) {
                    //     // Caballo
                    // }
                    // if (j == 2 || j == boardLength - 3) {
                    //     // Alfil
                    // }
                    // if (j == 3) {
                    //     // Rey
                    // }
                    // if (j == 4) {
                    //     // Reina
                    // }
                    else {
                        this.board[i][j] = new EmptySpaceChess(i, j);
                    }
                } else {
                    this.board[i][j] = new EmptySpaceChess(i, j);
                }
            }
        }
    }

    move(x1, y1, x2, y2) {
        if (this.board[x1][y1].canMove(this.board, x2, y2)) {
            this.board[x1][y1].move(x2, y2);
            this.board[x2][y2] = this.board[x1][y1]
            this.board[x1][y1] = new EmptySpaceChess()

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