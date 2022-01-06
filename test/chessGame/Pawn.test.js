const Pawn = require('../../src/game/chess/pieces/Pawn')
const {emptyBoard, position, createData} = require("../utils");

let underProve1, underProve2, board
describe('Pawn Behavior', () => {
    describe('Player 1\' pawn piece', () => {
        beforeAll(()=> {
            underProve1 = new Pawn(1, 1, 1)
        })
        beforeEach(() => {
            board = emptyBoard()
        })
        test('can move one step up and NOT down or to the sides', () => {
            expect(underProve1.canMove(board, 0, 1))
                .toBeTruthy()
            expect(underProve1.canMove(board, 2, 1))
                .toBeFalsy()
            expect(underProve1.canMove(board, 1, 2))
                .toBeFalsy()
            expect(underProve1.canMove(board, 1, 0))
                .toBeFalsy()
        })
        test('can NOT move one step up If is not empty', () => {
            board[0][1] = new Pawn(1, 0, 1)
            expect(underProve1.canMove(board, 0, 1))
                .toBeFalsy()
            board[0][1] = new Pawn(2, 0, 1)
            expect(underProve1.canMove(board, 0, 1))
                .toBeFalsy()
        })
        test('can NOT move one step up diagonally unless is an enemy', () => {
            board[0][0] = new Pawn(1, 0, 0)
            board[0][2] = new Pawn(2, 0, 2)
            expect(underProve1.canMove(board, 0, 0))
                .toBeFalsy()
            expect(underProve1.canMove(board, 0, 2))
                .toBeTruthy()
        })
    })
    describe('Player 2\' pawn piece', () => {
        beforeAll(()=> {
            underProve2 = new Pawn(2, 1, 1)
        })
        beforeEach(() => {
            board = emptyBoard()
        })
        test('can move one step down and NOT up or to the sides', () => {
            expect(underProve2.canMove(board, 2, 1))
                .toBeTruthy()
            expect(underProve2.canMove(board, 0, 1))
                .toBeFalsy()
            expect(underProve2.canMove(board, 1, 2))
                .toBeFalsy()
            expect(underProve2.canMove(board, 1, 0))
                .toBeFalsy()
        })
        test('can NOT move one step down If is not empty', () => {
            board[2][1] = new Pawn(1, 2, 1)
            expect(underProve2.canMove(board, 1, 2))
                .toBeFalsy()
            board[2][1] = new Pawn(2, 2, 1)
            expect(underProve2.canMove(board, 1, 2))
                .toBeFalsy()
        })
        test('can NOT move one step down diagonally unless is an enemy', () => {
            expect(underProve2.canMove(board, 2, 0))
                .toBeFalsy()
            board[2][0] = new Pawn(2, 2, 2)
            board[2][2] = new Pawn(1, 2, 0)
            expect(underProve2.canMove(board, 2, 0))
                .toBeFalsy()
            expect(underProve2.canMove(board, 2, 2))
                .toBeTruthy()
        })
    })
    describe('General', ()=>{
        beforeAll(()=>{
            board = emptyBoard()
            board[0][0] = underProve2 = new Pawn(2, 0, 0)
            board[2][2] = underProve1 = new Pawn(1, 2, 2)
            board[1][1] = new Pawn(1, 1, 1)
        })
        test('getData', () => {
            expect(underProve2.getData(board))
                .toStrictEqual(
                    createData(
                        'pawn',
                        2,
                        position(0, 0),
                        [
                            position(1, 0),
                            position(1, 1)
                        ]
                    )
                )
            expect(underProve1.getData(board))
                .toStrictEqual(
                    createData(
                        'pawn',
                        1,
                        position(2, 2),
                        [
                            position(1, 2),
                        ]
                    )
                )
        })
    })
})

