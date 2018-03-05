"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const battleUtils_1 = require("./battleUtils");
const enumStatus_1 = require("./enumStatus");
const logger_1 = require("./logger");
/**
 * Create an Party object
 * @class <p>A Party</p>
 */
class Party {
    /**
     * [Party constructor]
     * @constructor
     * @param {Player} player1 [The first player]
     * @param {Player} player2 [The second player]
     */
    constructor(player1, player2) {
        this._logger = new logger_1.Logger();
        this._players = [];
        this._timestamp = undefined;
        this._id = undefined;
        this._timestamp = Date.now();
        this._players.push(player1.name);
        this._players.push(player2.name);
        this._id = this._players.toString().trim() + this._timestamp.toString();
    }
    /**
     * @description [hit For to shoot on a enemy ship ]
     * @param {Player} fromPlayer [Player behind the shot]
     * @param {Player} intoPlayer [Player undergoing shooting]
     * @param {number} hor        [Horizontal target]
     * @param {number} vert       [Vertical targer]
     */
    hit(fromPlayer, intoPlayer, hor, vert) {
        let grilleFromPlayer = fromPlayer.grid;
        let grilleIntoPlayer = intoPlayer.grid;
        if (grilleIntoPlayer.getMatrice.getValue(battleUtils_1.BattleUtils.generateKeyGridByVal(hor, vert)).state === enumStatus_1.EnumStatus.STATUS_EMPTY) {
            grilleIntoPlayer.getMatrice.getValue(battleUtils_1.BattleUtils.generateKeyGridByVal(hor, vert)).updateStatus(enumStatus_1.EnumStatus.STATUS_FAIL);
        }
        else {
            grilleIntoPlayer.getMatrice.getValue(battleUtils_1.BattleUtils.generateKeyGridByVal(hor, vert)).updateStatus(enumStatus_1.EnumStatus.STATUS_HIT);
        }
    }
    get getId() {
        return this._id;
    }
}
exports.Party = Party;

//# sourceMappingURL=../maps/party.js.map
