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
    calCulStartCase() {
        let min = 50; //valeur simplement plus grande que la taille de la grille
        if (this._shipOrient === enumOrientation_1.EnumOrientation.OR_HORIZONTAL) {
            for (let itemHor of this._shipPosition.values()) {
                min = Math.min(min, itemHor.hor);
            }
            this._startCase.hor = min;
        }
        else {
            for (let itemVert of this._shipPosition.values()) {
                min = Math.min(min, itemVert.vert);
            }
            this._startCase.vert = min;
        }
    }
    /**
     * [calCulEndCase description]
     */
    calCulEndCase() {
        let max = -10; //valeur simplement plus petite que la taille de la grille
        if (this._shipOrient === enumOrientation_1.EnumOrientation.OR_HORIZONTAL) {
            for (let itemHor of this._shipPosition.values()) {
                max = Math.max(max, itemHor.hor);
            }
            this._endCase.hor = max;
        }
        else {
            for (let itemVert of this._shipPosition.values()) {
                max = Math.min(max, itemVert.vert);
            }
            this._endCase.vert = max;
        }
    }
}
exports.PorteAvion = PorteAvion;
