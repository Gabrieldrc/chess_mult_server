const Chess = require("../game/chess/Chess");

module.exports = class GameFactoy {
    static getGame(name) {
        switch (name) {
            case 'CHESS':
                return new Chess()
        }
        return
    }
}