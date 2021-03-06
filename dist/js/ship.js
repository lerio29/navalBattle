"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enumOrientation_1 = require("./enumOrientation");
/**
 * Create an Ship object
 * @class <p>The ship skeleton</p>
 * @author Vincent VILERIO
 */
class Ship {
    /**
     * [Ship constructor]
     * @param {string} shipName     [the ship's name]
     * @param {EnumShip} shipType     [the ship's type]
     * @param {number} shipSize     [the ship's size]
     * @param {Dictionary<string,MatriceCase>} shipPosition [All ship's boxes]
     * @param {MatriceCase} startCase    [The fist ship's box]
     * @param {MatriceCase} endCase      [The last ship's box]
     */
    constructor(shipName, shipType, shipSize, shipOrient, shipPosition) {
        this._shipName = shipName;
        this._shipType = shipType;
        this._shipSize = shipSize;
        this._shipOrient = shipOrient;
        this._shipPosition = shipPosition;
        this._sunk = false;
        this._hits = 0;
    }
    incrementHits() {
        this._hits++;
        if (this._hits === this._shipSize) {
            this._sunk = true;
        }
    }
    checkSunk() {
        return this._sunk;
    }
    /**
     * @description [calCulStartCase Calculate the first box of the ship]
     */
    calculStartCase() {
        let min = 50; //valeur simplement plus grande que la taille de la grille
        if (this._shipOrient === enumOrientation_1.EnumOrientation.OR_HORIZONTAL) {
            for (let itemHor of this._shipPosition.values()) {
                if (min > Math.min(min, itemHor.hor)) {
                    this._startCase = itemHor;
                    min = itemHor.hor;
                }
            }
        }
        else {
            for (let itemVert of this._shipPosition.values()) {
                if (min > Math.min(min, itemVert.vert)) {
                    this._startCase = itemVert;
                    min = itemVert.vert;
                }
            }
        }
        return this._startCase;
    }
    /**
     * @description [calCulEndCase Calculate the last box of the ship]
     */
    calculEndCase() {
        let max = -50; //valeur simplement plus petite que la taille de la grille
        if (this._shipOrient === enumOrientation_1.EnumOrientation.OR_HORIZONTAL) {
            for (let itemHor of this._shipPosition.values()) {
                if (max <= Math.max(max, itemHor.hor)) {
                    this._endCase = itemHor;
                    max = itemHor.hor;
                }
            }
        }
        else {
            for (let itemVert of this._shipPosition.values()) {
                if (max <= Math.max(max, itemVert.vert)) {
                    this._endCase = itemVert;
                    max = itemVert.vert;
                }
            }
        }
        return this._endCase;
    }
    get shipName() {
        return this._shipName;
    }
    set shipName(name) {
        this._shipName = name;
    }
    get shipType() {
        return this._shipType;
    }
    set shipType(type) {
        this._shipType = type;
    }
    get shipSize() {
        return this._shipSize;
    }
    set shipSize(size) {
        this._shipSize = size;
    }
    get shipOrient() {
        return this._shipOrient;
    }
    set shipOrient(orient) {
        this._shipOrient = orient;
    }
    get shipPosition() {
        return this._shipPosition;
    }
    set shipPosition(position) {
        this._shipPosition = position;
    }
}
exports.Ship = Ship;

//# sourceMappingURL=../maps/ship.js.map
