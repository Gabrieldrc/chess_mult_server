const Bishop = require('../../src/game/chess/pieces/Bishop')
const Pawn = require('../../src/game/chess/pieces/Pawn')
const {position, emptyBoard, createData} = require('../utils')

describe('Bishop Behavior', ()=>{
    let underProve, board
    beforeEach(()=>{
        board = emptyBoard(5)
        board[2][2] = underProve = new Bishop(1, 2, 2)
    })
    describe('canMove should return', ()=>{
        test('true if the movement is diagonally', ()=>{
            expect(underProve.canMove(board, 0, 0)).toBeTruthy()
            expect(underProve.canMove(board, 0, 4)).toBeTruthy()
            expect(underProve.canMove(board, 4, 0)).toBeTruthy()
            expect(underProve.canMove(board, 4, 4)).toBeTruthy()
        })
        test('false if the movement is wrong', ()=>{
            expect(underProve.canMove(board, 2, 0)).toBe(false)
            expect(underProve.canMove(board, 0, 2)).toBe(false)
            expect(underProve.canMove(board, 4, 2)).toBe(false)
            expect(underProve.canMove(board, 2, 4)).toBe(false)
        })
        test('false if is a piece in the way', ()=>{
            board[1][1] = new Pawn(1, 1, 1)
            expect(underProve.canMove(board, 0, 0)).toBe(false)
        })
        test('false if the destined position there is a piece from its team', ()=>{
            board[0][0] = new Pawn(1, 0, 0)
            expect(underProve.canMove(board, 0, 0)).toBe(false)
        })
        test('true if the destined position there is a piece from other team', ()=>{
            board[0][0] = new Pawn(2, 0, 0)
            expect(underProve.canMove(board, 0, 0)).toBeTruthy()
        })
    })
    describe('getData should return', ()=>{
        test('an object from the piece', () => {
            expect(underProve.getData(board))
                .toStrictEqual(
                    createData(
                        'bishop',
                        1,
                        position(2, 2),
                        [
                            position(0, 0),
                            position(0, 4),
                            position(1, 1),
                            position(1, 3),
                            position(3, 1),
                            position(3, 3),
                            position(4, 0),
                            position(4, 4),
                        ]
                    )
                )
        })
    })
})