"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_collections_1 = require("typescript-collections");
const matriceCase_1 = require("./matriceCase");
const enumStatus_1 = require("./enumStatus");
const battleUtils_1 = require("./battleUtils");
const logger_1 = require("./logger");
/**
 * Create a battle matrix
 * @class <p>A BattleMatrice is the war floor</p>
 */
class BattleMatrice {
    /**
     * [BattleMatrice constructor]
     * @param {number}  sizeMatrice [The size of th war floor : a square of value x value]
     * @param {boolean} silent      [Enable or disable logger]
     */
    constructor(sizeMatrice, silent) {
        this._logger = new logger_1.Logger();
        if (!silent) {
            this._logger.silent = false;
        }
        let initLoopH = 1;
        let hMatrice = sizeMatrice;
        let vMatrice = sizeMatrice;
        this._idHash = battleUtils_1.BattleUtils.createUniqueId();
        this._size = sizeMatrice;
        this._matrice = new typescript_collections_1.Dictionary();
        this._ships = new typescript_collections_1.Set();
        let caseMat;
        while (initLoopH <= hMatrice) {
            let initLoopV = 1;
            while (initLoopV <= vMatrice) {
                caseMat = new matriceCase_1.MatriceCase(initLoopH, initLoopV, enumStatus_1.EnumStatus.STATUS_EMPTY);
                this._logger.debug("test", "GenKey: " + battleUtils_1.BattleUtils.generateKeyGridByVal(initLoopH, initLoopV));
                this._matrice.setValue(battleUtils_1.BattleUtils.generateKeyGridByVal(initLoopH, initLoopV), caseMat);
                initLoopV++;
            }
            initLoopH++;
        }
    }
    /**
     * @description [updateMatrice method update a box values]
     * @param {MatriceCase} status [Update box datas from the key]
     */
    updateMatrice(status) {
        //on MAJ la case qui correspond à la cle 
        let tmpKey = battleUtils_1.BattleUtils.generateKeyGridByVal(status.hor, status.vert);
        this._matrice.setValue(tmpKey, status);
        return this._matrice;
    }
    /**
     * @description [addShip add a ship to the matrix]
     * @param {Ship.Ship} ship [A ship]
     */
    addShip(ship) {
        //associer des bateau à une grille
        this._ships.add(ship);
    }
    /**
     * @description [addShips add a ships set to the matrix]
     * @param {Set<Ship>} ships [ships set]
     */
    addShips(ships) {
        for (let ship of ships.toArray()) {
            this.addShip(ship);
        }
    }
    /**
     * [checkShipIsSet description]
     * @param  {number}   hor  [description]
     * @param  {number}   vert [description]
     * @return {EnumShip}      [description]
     */
    checkShipIsSet(hor, vert) {
        let result = undefined;
        //on parcourt les navires presents
        this._ships.forEach(ship => {
            //on verifie les coordonnees
            if (ship.shipPosition.containsKey(battleUtils_1.BattleUtils.generateKeyGridByVal(hor, vert))) {
                result = ship.shipType;
            }
        });
        return result;
    }
    /**
     * [getSize Size of matrix]
     * @return {number} [Size of matrix]
     */
    get getSize() {
        return this._size;
    }
    /**
     * [getShips Return all ships hooked in the matrix]
     * @return {Set<Ship>} [A ships set]
     */
    get getShips() {
        return this._ships;
    }
    /**
     * [getMatrice Return all boxes in the matrix]
     * @return {Dictionary<MatriceCase>} [A boxes dictionnary]
     */
    get getMatrice() {
        return this._matrice;
    }
    get getIdHash() {
        return this._idHash;
    }
}
exports.BattleMatrice = BattleMatrice;

//# sourceMappingURL=../maps/battleMatrice.js.map
