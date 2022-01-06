const Rook = require('../../src/game/chess/pieces/Rook')
const Pawn = require('../../src/game/chess/pieces/Pawn')
const {emptyBoard, position, createData} = require("../utils");

let underProve1, board
describe('Rook Behavior', () => {
    beforeAll(()=> {
        board = emptyBoard()
        board[0][0] = underProve1 = new Rook(1, 0, 0)
    })
    beforeEach(() => {
        board = emptyBoard()
        board[0][0] = underProve1 = new Rook(1, 0, 0)
    })
    test('can move horizontally and vertically if the positions betwen are empty', () => {
        expect(underProve1.canMove(board, 0, 2))
            .toBeTruthy()
        expect(underProve1.canMove(board, 2, 0))
            .toBeTruthy()
        board[1][0] = new Pawn(1, 1, 0)
        board[0][1] = new Pawn(1, 0, 1)
        expect(underProve1.canMove(board, 0, 2))
            .toBeFalsy()
        expect(underProve1.canMove(board, 2, 0))
            .toBeFalsy()
        board = emptyBoard()
        board[0][2] = underProve1 = new Rook(1, 0, 2)
        board[0][1] = new Pawn(1, 0 , 1)
        expect(underProve1.canMove(board, 0, 0))
            .toBeFalsy()
        board = emptyBoard()
        board[2][0] = underProve1 = new Rook(1, 2, 0)
        board[1][0] = new Pawn(1, 1 , 0)
        expect(underProve1.canMove(board, 0, 0))
            .toBeFalsy()
    })
    test('can NOT move diagonally', () => {
        expect(underProve1.canMove(board, 2, 2))
            .toBeFalsy()
    })
    test('can move to the position if there is a piece from other team', () => {
        board[2][0] = new Pawn(1, 2, 0)
        board[0][2] = new Pawn(2, 0, 2)
        expect(underProve1.canMove(board, 2, 0))
            .toBeFalsy()
        expect(underProve1.canMove(board, 0, 2))
            .toBeTruthy()
    })
    test('getData return the necesary data of itself', () =>{
        expect(underProve1.getData(board))
            .toStrictEqual(
                createData(
                    'rook',
                    1,
                    position(0, 0),
                    [
                        position(0, 1),
                        position(0, 2),
                        position(1, 0),
                        position(2, 0)
                    ]
                )
            )
    })
})

