const King = require('../../src/game/chess/pieces/King')
const Pawn = require('../../src/game/chess/pieces/Pawn')
const Rook = require('../../src/game/chess/pieces/Rook')

const {emptyBoard, createData, position} = require('../utils')

describe('King behavior', ()=>{
    let underProve, board
    beforeEach(() => {
        board = emptyBoard(5)
        board[2][2] = underProve = new King(1, 2, 2)
    })
    describe('canMove should return', ()=>{
        test('true if the position destined is a step away, otherwise, false', ()=>{
            expect(underProve.canMove(board, 1, 1)).toBeTruthy()
            expect(underProve.canMove(board, 1, 2)).toBeTruthy()
            expect(underProve.canMove(board, 1, 3)).toBeTruthy()
            expect(underProve.canMove(board, 2, 1)).toBeTruthy()
            expect(underProve.canMove(board, 2, 3)).toBeTruthy()
            expect(underProve.canMove(board, 3, 1)).toBeTruthy()
            expect(underProve.canMove(board, 3, 2)).toBeTruthy()
            expect(underProve.canMove(board, 3, 3)).toBeTruthy()

            expect(underProve.canMove(board, 0, 0)).toBeFalsy()
            expect(underProve.canMove(board, 2, 4)).toBeFalsy()
        })
        test('false if at the position destined there is a piece from the same team', ()=>{
            board[2][3] = new Pawn(1, 2, 3)
            board[1][2] = new Pawn(1, 1, 2)
            expect(underProve.canMove(board, 2, 3)).toBeFalsy()
            expect(underProve.canMove(board, 1, 2)).toBeFalsy()
        })
        test('false if at the position destined there is a piece from the other team who can "eat" it', ()=>{
            board[0][3] = new Rook(2, 0, 3)
            board[4][1] = new Rook(1, 4, 1)
            expect(underProve.canMove(board, 1, 3)).toBeFalsy()
            expect(underProve.canMove(board, 2, 3)).toBeFalsy()
            expect(underProve.canMove(board, 3, 3)).toBeFalsy()
            expect(underProve.canMove(board, 1, 1)).toBeTruthy()
            expect(underProve.canMove(board, 2, 1)).toBeTruthy()
            expect(underProve.canMove(board, 3, 1)).toBeTruthy()
        })
    })
    describe('getData should return', ()=>{
        test('the name, player, position, list where can move', ()=>{
            board[0][3] = new Rook(2, 0, 3)
            board[4][1] = new Rook(1, 4, 1)
            expect(underProve.getData(board))
                .toStrictEqual(
                    createData(
                        'king',
                        1,
                        position(2, 2),
                        [
                            position(1, 1),
                            position(1, 2),
                            position(2, 1),
                            position(3, 1),
                            position(3, 2),
                        ]
                    )
                )
        })
    })
})