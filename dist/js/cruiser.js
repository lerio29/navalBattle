"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ship_1 = require("./ship");
const enumShip_1 = require("./enumShip");
class Cruiser extends ship_1.Ship {
    constructor(shipPosition, shipOrient) {
        const name = 'Croiseur';
        super(name, enumShip_1.EnumShip.SHIP_CROISEUR, 4, shipOrient, shipPosition);
    }
}
exports.Cruiser = Cruiser;
