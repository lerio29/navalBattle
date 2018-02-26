"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enumOrientation_1 = require("./enumOrientation");
class Ship {
    /**
     * [constructor description]
     * @param {string}                                                 shipName     [description]
     * @param {EnumShip}                                      shipType     [description]
     * @param {number}                                                 shipSize     [description]
     * @param {Dictionary<string,MatriceCase>} shipPosition [description]
     * @param {MatriceCase}                                startCase    [description]
     * @param {MatriceCase}                                endCase      [description]
     */
    constructor(shipName, shipType, shipSize, shipOrient, shipPosition) {
        this._shipName = shipName;
        this._shipType = shipType;
        this._shipSize = shipSize;
        this._shipOrient = shipOrient;
        this._shipPosition = shipPosition;
    }
    /**
     * [calCulStartCase description]
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
     * [calCulEndCase description]
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
