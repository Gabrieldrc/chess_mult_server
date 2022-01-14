const Queen = require('../../src/game/chess/pieces/Queen')
const {position, createData, emptyBoard} = require('../utils')

describe('Queen behavior', ()=>{
    let underProve, board
    beforeEach(()=>{
        board = emptyBoard(5)
        board[2][2] = underProve = new Queen(1, 2, 2)
    })
    describe('canMove should return', ()=>{
        test('true if it moves like the bishop', ()=>{
            expect(underProve.canMove(board, 0, 0)).toBeTruthy()
            expect(underProve.canMove(board, 0, 4)).toBeTruthy()
            expect(underProve.canMove(board, 4, 0)).toBeTruthy()
            expect(underProve.canMove(board, 4, 4)).toBeTruthy()
        })
        test('true if it moves like the rook', ()=>{
            expect(underProve.canMove(board, 0, 2)).toBeTruthy()
            expect(underProve.canMove(board, 4, 2)).toBeTruthy()
            expect(underProve.canMove(board, 2, 0)).toBeTruthy()
            expect(underProve.canMove(board, 2, 4)).toBeTruthy()
        })
    })
    describe('getData should return', ()=>{
        test('the data from the piece', ()=>{
            expect(underProve.getData(board))
                .toStrictEqual(
                createData(
                    'queen',
                    1,
                    position(2, 2),
                    [
                        position(0, 0),
                        position(0, 2),
                        position(0, 4),
                        position(1, 1),
                        position(1, 2),
                        position(1, 3),
                        position(2, 0),
                        position(2, 1),
                        position(2, 3),
                        position(2, 4),
                        position(3, 1),
                        position(3, 2),
                        position(3, 3),
                        position(4, 0),
                        position(4, 2),
                        position(4, 4),

                    ]
                )
            )
        })
    })
})