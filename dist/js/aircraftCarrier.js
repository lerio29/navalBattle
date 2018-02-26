"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ship_1 = require("./ship");
const enumShip_1 = require("./enumShip");
class AircraftCarrier extends ship_1.Ship {
    constructor(shipPosition, shipOrient) {
        const name = 'PorteAvion';
        super(name, enumShip_1.EnumShip.SHIP_PORTE_AVION, 5, shipOrient, shipPosition);
    }
}
exports.AircraftCarrier = AircraftCarrier;
