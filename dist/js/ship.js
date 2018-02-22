"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
