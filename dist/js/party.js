"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const battleUtils_1 = require("./battleUtils");
const enumStatus_1 = require("./enumStatus");
const matriceCase_1 = require("./matriceCase");
const logger_1 = require("./logger");
const typescript_collections_1 = require("typescript-collections");
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
        this._timestamp = undefined;
        this._id = undefined;
        this._timestamp = Date.now();
        this._players = new typescript_collections_1.Dictionary();
        this._players.setValue(player1.uid, player1);
        this._players.setValue(player2.uid, player2);
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
        let currentStatus = intoPlayer.grid.getMatrice.getValue(battleUtils_1.BattleUtils.generateKeyGridByVal(hor, vert)).state;
        if (currentStatus === enumStatus_1.EnumStatus.STATUS_EMPTY) {
            const tmpBox = new matriceCase_1.MatriceCase(hor, vert, enumStatus_1.EnumStatus.STATUS_FAIL);
            fromPlayer.targetGrid.updateMatrice(tmpBox);
            intoPlayer.grid.updateMatrice(tmpBox);
            //update des joueurs de la partie
            this._players.setValue(fromPlayer.uid, fromPlayer);
            this._players.setValue(intoPlayer.uid, intoPlayer);
            return enumStatus_1.EnumStatus.STATUS_FAIL;
        }
        else {
            if (currentStatus != fromPlayer.targetGrid.getMatrice.getValue(battleUtils_1.BattleUtils.generateKeyGridByVal(hor, vert)).state) {
                const tmpBox = new matriceCase_1.MatriceCase(hor, vert, enumStatus_1.EnumStatus.STATUS_HIT);
                fromPlayer.targetGrid.updateMatrice(tmpBox);
                intoPlayer.grid.updateMatrice(tmpBox);
                //update des joueurs de la partie
                this._players.setValue(fromPlayer.uid, fromPlayer);
                this._players.setValue(intoPlayer.uid, intoPlayer);
                return enumStatus_1.EnumStatus.STATUS_HIT;
            }
            else {
                return enumStatus_1.EnumStatus.STATUS_ALREADY;
            }
        }
    }
    /**
     * [getId description]
     * @return {string} [description]
     */
    get getId() {
        return this._id;
    }
}
exports.Party = Party;

//# sourceMappingURL=../maps/party.js.map
