"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ship_1 = require("./ship");
const enumShip_1 = require("./enumShip");
/**
 * Create an AircraftCarrier object
 * @class <p>A AircraftCarrier is a Ship with a lenght of 5</p>
 * @author Vincent VILERIO
 */
class AircraftCarrier extends ship_1.Ship {
    /**
     * [AircraftCarrier constructor]
     * @constructor
     * @param {Dictionary<string,MatriceCase>} shipPosition [The shipPosition is a Dictionary of all the boxes corresponding to the ship ]
     * @param {EnumOrientation}                shipOrient   [The ship orientation horizontal or vertical]
     */
    constructor(shipPosition, shipOrient) {
        const name = 'PorteAvion';
        super(name, enumShip_1.EnumShip.SHIP_PORTE_AVION, 5, shipOrient, shipPosition);
    }
}
exports.AircraftCarrier = AircraftCarrier;

//# sourceMappingURL=../maps/aircraftCarrier.js.map
