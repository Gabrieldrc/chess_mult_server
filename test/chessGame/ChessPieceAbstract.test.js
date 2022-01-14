const ChessPieceAbstract = require('../../src/game/chess/ChessPieceAbstract');

describe('ChessPieceAbstract', ()=> {
    let underProve
    beforeAll(() => {
        underProve = new ChessPieceAbstract(-1, '', 0, 0)
    })
    test('canMove throw an Error', () => {
        expect(() => underProve.canMove([], 1, 2)).toThrow('It HAVE to be implemented!');
    })
    test('move updates current position', () => {
        underProve.move(1, 2)
        expect(underProve.x).toBe(1);
        expect(underProve.y).toBe(2);
    })
    test('set player', () => {
        underProve.player = 0
        expect(underProve.player).toBe(0);
    })
    test('set name', () => {
        underProve.name = 'a'
        expect(underProve.name).toBe('a');
    })
})