const EmptySpaceChess = require('../../src/game/chess/pieces/EmptySpaceChess')

let underProve
describe('EmptySpaceChess', () =>{
    beforeAll(()=>{
        underProve = new EmptySpaceChess()
    })
    test('name is empty', ()=>{
        expect(underProve.name).toBe('')
    })
    test('player is 0', ()=>{
        expect(underProve.player).toBe(0)
    })
    test('x and y to be -1', ()=>{
        expect(underProve.x).toBe(-1)
        expect(underProve.y).toBe(-1)
    })
    test('move dont change positions', ()=>{
        underProve.move(10, 10)
        expect(underProve.x).toBe(-1)
        expect(underProve.y).toBe(-1)
    })
    test('canMove return false', ()=>{
        expect(underProve.canMove([[]], 10, 10))
            .toBeFalsy()
    })
    test('getData', ()=>{
        expect(underProve.getData([[]]))
            .toStrictEqual({
                name: '',
                player: 0,
                position: {i: -1, j: -1},
                placeCanMove: []
            })
    })
})