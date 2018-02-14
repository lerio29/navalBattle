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
    get getShipName() {
        return this._shipName;
    }
    set setShipName(name) {
        this._shipName = name;
    }
    get getShipType() {
        return this._shipType;
    }
    set setShipType(type) {
        this._shipType = type;
    }
    get getShipSize() {
        return this._shipSize;
    }
    set setShipSize(size) {
        this._shipSize = size;
    }
    get getShipOrient() {
        return this._shipOrient;
    }
    set setShipOrient(orient) {
        this._shipOrient = orient;
    }
    get getPosition() {
        return this._shipPosition;
    }
    set Position(position) {
        this._shipPosition = position;
    }
}
exports.Ship = Ship;
