"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_collections_1 = require("typescript-collections");
const matriceCase_1 = require("./matriceCase");
const enumStatus_1 = require("./enumStatus");
const battleUtils_1 = require("./battleUtils");
const logger_1 = require("./logger");
/**
 * Classe de generation de matrice/grille de bataille navale
 */
class BattleMatrice {
    /**
     * [constructor description]
     * @param {number} sizeMatrice [description]
     */
    constructor(sizeMatrice, silent) {
        this._logger = new logger_1.Logger();
        if (!silent) {
            this._logger.silent = false;
        }
        let initLoopH = 1;
        let hMatrice = sizeMatrice;
        let vMatrice = sizeMatrice;
        this._size = sizeMatrice;
        this._matrice = new typescript_collections_1.Dictionary();
        let caseMat;
        while (initLoopH <= hMatrice) {
            let initLoopV = 1;
            while (initLoopV <= vMatrice) {
                caseMat = new matriceCase_1.MatriceCase(initLoopV, initLoopH, enumStatus_1.EnumStatus.STATUS_EMPTY);
                this._logger.debug("test", "GenKey: " + battleUtils_1.BattleUtils.generateKeyGridByVal(initLoopV, initLoopH));
                this._matrice.setValue(battleUtils_1.BattleUtils.generateKeyGridByVal(initLoopV, initLoopH), caseMat);
                initLoopV++;
            }
            initLoopH++;
        }
    }
    /**
     * [updateMatrice description]
     * @param {MatriceCase} status [description]
     */
    updateMatrice(status) {
        //on MAJ la case qui correspond à la cle 
        let tmpKey = battleUtils_1.BattleUtils.generateKeyGridByVal(status.vert, status.hor);
        this._matrice.setValue(tmpKey, status);
    }
    /**
     * [addShip description]
     * @param {Ship.Ship} ship [description]
     */
    addShip(ship) {
        //associer des bateau à une grille
    }
    get getSize() {
        return this._size;
    }
    /**
     * [getMatrice Retourne un set de MatriceCase correspondant à la grille de la bataille navale]
     * @return {Dictionary<MatriceCase>} [description]
     */
    get getMatrice() {
        return this._matrice;
    }
}
exports.BattleMatrice = BattleMatrice;
