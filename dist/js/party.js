"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const battleUtils_1 = require("./battleUtils");
const enumStatus_1 = require("./enumStatus");
class Party {
    constructor(player1, player2) {
        this._players = [];
        this._timestamp = undefined;
        this._id = undefined;
        this._timestamp = Date.now();
        this._players.push(player1.name);
        this._players.push(player2.name);
        this._id = this._players.toString().trim() + this._timestamp.toString();
    }
    get getId() {
        return this._id;
    }
    hit(fromPlayer, intoPlayer, hor, vert) {
        let grilleFromPlayer = fromPlayer.grid;
        let grilleIntoPlayer = intoPlayer.grid;
        if (grilleIntoPlayer.getMatrice.getValue(battleUtils_1.BattleUtils.generateKeyGridByVal(vert, hor)).state === enumStatus_1.EnumStatus.STATUS_EMPTY) {
            console.log("before hit  : " + " fromPlayer : " + fromPlayer.name + " into : " + intoPlayer.name + " " + battleUtils_1.BattleUtils.generateKeyGridByVal(vert, hor) + "; state :" + grilleIntoPlayer.getMatrice.getValue(battleUtils_1.BattleUtils.generateKeyGridByVal(vert, hor)).state);
            grilleIntoPlayer.getMatrice.getValue(battleUtils_1.BattleUtils.generateKeyGridByVal(vert, hor)).updateStatus(enumStatus_1.EnumStatus.STATUS_FAIL);
            console.log("hit: " + " fromPlayer : " + fromPlayer.name + " into : " + intoPlayer.name + " " + battleUtils_1.BattleUtils.generateKeyGridByVal(vert, hor) + "; state :" + grilleIntoPlayer.getMatrice.getValue(battleUtils_1.BattleUtils.generateKeyGridByVal(vert, hor)).state);
        }
        else {
            console.log("before hit: " + " fromPlayer : " + fromPlayer.name + " into : " + intoPlayer.name + " " + battleUtils_1.BattleUtils.generateKeyGridByVal(vert, hor) + "; state :" + grilleIntoPlayer.getMatrice.getValue(battleUtils_1.BattleUtils.generateKeyGridByVal(vert, hor)).state);
            grilleIntoPlayer.getMatrice.getValue(battleUtils_1.BattleUtils.generateKeyGridByVal(vert, hor)).updateStatus(enumStatus_1.EnumStatus.STATUS_HIT);
            console.log("hit: " + " fromPlayer : " + fromPlayer.name + " into : " + intoPlayer.name + " " + battleUtils_1.BattleUtils.generateKeyGridByVal(vert, hor) + "; state :" + grilleIntoPlayer.getMatrice.getValue(battleUtils_1.BattleUtils.generateKeyGridByVal(vert, hor)).state);
        }
    }
}
exports.Party = Party;
