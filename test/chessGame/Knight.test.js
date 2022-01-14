const Knight = require('../../src/game/chess/pieces/Knight')
const Pawn = require('../../src/game/chess/pieces/Pawn')
const { position, createData, emptyBoard} = require('../utils')

describe('Kngiht Behavior', () => {
    let underProve, board
    beforeEach(()=>{
        board = emptyBoard(5)
        board[2][2] = underProve = new Knight(1, 2, 2)
    })
    describe('canMove should return', ()=>{
        test('true if moves two place in horizontal and one place vertical', ()=>{
            expect(underProve.canMove(board, 1, 0)).toBeTruthy()
            expect(underProve.canMove(board, 1, 4)).toBeTruthy()
            expect(underProve.canMove(board, 3, 0)).toBeTruthy()
            expect(underProve.canMove(board, 3, 4)).toBeTruthy()
        })
        test('true if two place in vertical and one place horizontal', ()=>{
            expect(underProve.canMove(board, 0, 1)).toBeTruthy()
            expect(underProve.canMove(board, 0, 3)).toBeTruthy()
            expect(underProve.canMove(board, 4, 1)).toBeTruthy()
            expect(underProve.canMove(board, 4, 3)).toBeTruthy()
        })
        test('false if the move is wrong or is a piece of the same team', ()=>{
            expect(underProve.canMove(board, 0, 0)).toBeFalsy()
            board[0][1] = new Pawn(1, 0, 1)
            expect(underProve.canMove(board, 0, 1)).toBeFalsy()
        })
        test('true if there is a piece of the other team', ()=>{
            board[0][1] = new Pawn(2, 0, 1)
            expect(underProve.canMove(board, 0, 1)).toBeTruthy()
        })
    })
    describe('getData should return', ()=>{
        test('the data from the piece', () => {
            expect(underProve.getData(board))
                .toStrictEqual(
                    createData(
                        'knight',
                        1,
                        position(2, 2),
                        [
                            position(0, 1),
                            position(0, 3),
                            position(1, 0),
                            position(1, 4),
                            position(3, 0),
                            position(3, 4),
                            position(4, 1),
                            position(4, 3)
                        ]
                    )
                )
        })
    })
})