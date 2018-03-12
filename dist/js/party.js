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
 * @author Vincent VILERIO
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
    hit(fromPlayerUid, intoPlayerUid, hor, vert) {
        let EnnemyStatus = this._players.getValue(fromPlayerUid).targetGrid.getMatrice.getValue(battleUtils_1.BattleUtils.generateKeyGridByVal(hor, vert)).state;
        //verif si presence bateau
        let shipIsSet = this._players.getValue(intoPlayerUid).grid.checkShipIsSet(hor, vert);
        if (EnnemyStatus === enumStatus_1.EnumStatus.STATUS_EMPTY && typeof (shipIsSet) == "undefined") {
            const tmpBox = new matriceCase_1.MatriceCase(hor, vert, enumStatus_1.EnumStatus.STATUS_FAIL);
            this._players.getValue(fromPlayerUid).targetGrid.updateMatrice(tmpBox);
            return enumStatus_1.EnumStatus.STATUS_FAIL;
        }
        else if (EnnemyStatus === enumStatus_1.EnumStatus.STATUS_EMPTY && typeof (shipIsSet) != "undefined") {
            // if(EnnemyStatus != this._players.getValue(fromPlayerUid).targetGrid.getMatrice.getValue(BattleUtils.generateKeyGridByVal(hor,vert)).state ){
            const tmpBox = new matriceCase_1.MatriceCase(hor, vert, enumStatus_1.EnumStatus.STATUS_HIT);
            this._players.getValue(fromPlayerUid).targetGrid.updateMatrice(tmpBox);
            this._players.getValue(intoPlayerUid).grid.updateMatrice(tmpBox);
            return enumStatus_1.EnumStatus.STATUS_HIT;
            // }
        }
        else if (EnnemyStatus !== enumStatus_1.EnumStatus.STATUS_EMPTY) {
            return enumStatus_1.EnumStatus.STATUS_ALREADY;
        }
    }
    /**
     * [getId description]
     * @return {string} [description]
     */
    get getId() {
        return this._id;
    }
    get getPlayers() {
        return this._players;
    }
}
exports.Party = Party;

//# sourceMappingURL=../maps/party.js.map
