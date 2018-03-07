"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const battleUtils_1 = require("./battleUtils");
/**
 * Create an Player object
 * @class <p>A Player</p>
 */
class Player {
    //TODO ajouter une deuxième grid pour avoir le bilan du tir sur la grid ennemie
    /**
     * [Player constructor]
     * @constructor
     * @param {string}        name       [Player Name]
     * @param {BattleMatrice} grid       [grid associated with the player]
     * @param {BattleMatrice} targetGrid [Fire history grid]
     */
    constructor(name, grid, targetGrid) {
        this._name = undefined;
        this._grid = undefined;
        this._targetGrid = undefined;
        this._uid = undefined;
        this._uid = battleUtils_1.BattleUtils.createUniqueId();
        this._name = name;
        this._grid = grid;
        this._targetGrid = targetGrid;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get grid() {
        return this._grid;
    }
    get uid() {
        return this._uid;
    }
    set grid(grid) {
        this._grid = grid;
    }
    get targetGrid() {
        return this._targetGrid;
    }
    set targetGrid(targetGrid) {
        this._targetGrid = targetGrid;
    }
}
exports.Player = Player;

//# sourceMappingURL=../maps/player.js.map
