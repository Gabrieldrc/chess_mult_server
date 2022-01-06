module.exports = class ChessPieceAbstract {
    /**
     * Construct a ChessPieceAbstract object
     * @param player :int. '1' for player 1 or '2' for player 2.
     * @param name :string. Name of the piece
     * @param x :int. position on the x axis
     * @param y :int. position on the y axis
     */
    constructor(player, name, x, y) {
        this._player = player;
        this._name = name;
        this._x = x;
        this._y = y;
    }

    get player() {
        return this._player;
    }

    set player(value) {
        this._player = value;
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }
    /**
     * Check if the piece CAN move to those coordinates
     * @param board :Array[Array[ChessPieceAbstract]]]
     * @param x :int. position on the x axis
     * @param y :int. position on the y axis
     * @return bool
     */
    canMove(board, x, y) {
        throw new Error('It HAVE to be implemented!')
    }
    /**
     * update its coordinates
     * @param x :int. position on the x axis
     * @param y :int. position on the y axis
     * @return array
     */
    move(x, y) {
        this.x = x;
        this.y = y;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    /**
     * Get a list of positions where it can move
     * @param board
     * @return [{x: 1, y: 1],...}
     */
    getPlaceWhereCanMove(board) {
        let whereCanMove = []
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (this.canMove(board, i, j)) {
                    whereCanMove.push({
                        i: i,
                        j: j
                    })
                }
            }
        }
        return whereCanMove
    }

    getData(board) {
        return {
            name: this.name,
            player: this.player,
            position: {i: this.x, j: this.y},
            placeCanMove: this.getPlaceWhereCanMove(board)
        }
    }
}