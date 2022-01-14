const Chess = require('../../src/game/chess/Chess')
const PieceFactory = require('../../src/core/PieceFactory')

let underProve, board
describe('Chess behavior', ()=>{
    beforeAll(()=>{
        underProve = new Chess()
        underProve.newGame()
        board = underProve.board
    })
    describe('newGame should', ()=>{
        test(' return a array 8 x 8', ()=>{
            expect(board instanceof Array).toBeTruthy()
            expect(board.length).toStrictEqual(8)
            for (let i = 0; i < board.length; i++) {
                expect(board[i].length).toStrictEqual(8)
            }
        })
        test(' return the board in a particular order', ()=>{
            const boardExpected = [
                ['rook', 'knight', 'bishop', 'king', 'queen', 'bishop', 'knight', 'rook'],
                ['pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn'],
                ['', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', ''],
                ['pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn'],
                ['rook', 'knight', 'bishop', 'king', 'queen', 'bishop', 'knight', 'rook'],
            ]
            let boardRecieve = []
            for (let i = 0; i < board.length; i++) {
                boardRecieve.push([])
                for (let j = 0; j < board[i].length; j++) {
                    boardRecieve[i].push(board[i][j].name)
                }
            }
            expect(boardRecieve).toStrictEqual(boardExpected)
        })
        test(' return a new board where half pieces are from player 2 and the second one from player 1', ()=>{
            for (let i = 0; i < board.length; i++) {
                for (let j = 0; j < board[i].length; j++) {
                    if (i <= 1) {
                        expect(board[i][j].player).toStrictEqual(2)
                    } else if (i >= board.length - 2) {
                        expect(board[i][j].player).toStrictEqual(1)
                    } else {
                        expect(board[i][j].player).toStrictEqual(0)
                    }
                }
            }
        })
    })
    describe('move should', ()=>{
        beforeEach(() => {
            underProve.newGame()
            underProve._turn = 2
        })
        test(' return true if can move', ()=>{
            expect(underProve.move(1, 0, 2, 0)).toBeTruthy()
        })
        test(' leave an emptyspace where the piece was and placed at the new places', ()=>{
            underProve.move(1, 0, 2, 0)
            expect(underProve.board[1][0].name).toStrictEqual('')
            expect(underProve.board[2][0].name).toStrictEqual('pawn')
        })
        test(' return false if can not move', ()=>{
            expect(underProve.move(0, 0, 5, 0)).toBeFalsy()
        })
        test(' return false if is player 2 turn and try to move a player 1 piece', ()=>{
            expect(underProve.move(0, 0, 5, 0)).toBeFalsy()
        })
        test(' change turn if it could move', ()=>{
            expect(underProve._turn).toStrictEqual(2)
            underProve.move(1, 0, 2, 0)
            expect(underProve._turn).toStrictEqual(1)
        })
    })
    describe('getWinner should', ()=>{
        beforeEach(() => {
            underProve.newGame()
            underProve._turn = 2
        })
        test(' return 0 if there is no winner yet', ()=>{
            expect(underProve.getWinner()).toStrictEqual(0)
        })
        test(' return 1 if the only king left is player 1', ()=>{
            const board = underProve.board
            board[0][3] = PieceFactory.getPiece()
            expect(underProve.getWinner()).toStrictEqual(1)
        })
        test(' return 2 if the only king left is player 2', ()=>{
            const board = underProve.board
            board[7][3] = PieceFactory.getPiece()
            expect(underProve.getWinner()).toStrictEqual(2)
        })
    })
})