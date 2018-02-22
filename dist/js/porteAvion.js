"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ship_1 = require("./ship");
const enumShip_1 = require("./enumShip");
const enumOrientation_1 = require("./enumOrientation");
class PorteAvion extends ship_1.Ship {
    constructor(shipPosition, shipOrient) {
        const name = 'PorteAvion';
        super(name, enumShip_1.EnumShip.SHIP_PORTE_AVION, 5, shipOrient, shipPosition);
    }
    /**
     * [calCulStartCase description]
     */
    calculStartCase() {
        let min = -10; //valeur simplement plus grande que la taille de la grille
        if (this._shipOrient === enumOrientation_1.EnumOrientation.OR_HORIZONTAL) {
            for (let itemHor of this._shipPosition.values()) {
                if (min <= Math.min(min, itemHor.hor)) {
                    this._startCase = itemHor;
                }
                else {
                    min = Math.min(min, itemHor.hor);
                }
            }
        }
        else {
            for (let itemVert of this._shipPosition.values()) {
                if (min <= Math.min(min, itemVert.vert)) {
                    this._startCase = itemVert;
                }
                else {
                    min = Math.min(min, itemVert.vert);
                }
            }
        }
        return this._startCase;
    }
    /**
     * [calCulEndCase description]
     */
    calculEndCase() {
        let max = -10; //valeur simplement plus petite que la taille de la grille
        if (this._shipOrient === enumOrientation_1.EnumOrientation.OR_HORIZONTAL) {
            for (let itemHor of this._shipPosition.values()) {
                if (max <= Math.min(max, itemHor.hor)) {
                    this._endCase = itemHor;
                }
                else {
                    max = Math.min(max, itemHor.hor);
                }
            }
        }
        else {
            for (let itemVert of this._shipPosition.values()) {
                if (max <= Math.min(max, itemVert.hor)) {
                    this._endCase = itemVert;
                }
                else {
                    max = Math.min(max, itemVert.hor);
                }
            }
        }
        return this._endCase;
    }
}
exports.PorteAvion = PorteAvion;
