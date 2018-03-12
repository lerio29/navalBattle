"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ship_1 = require("./ship");
const enumShip_1 = require("./enumShip");
/**
 * Create an Cruiser object
 * @class <p>A Cruiser is a Ship with a lenght of 4</p>
 * @author Vincent VILERIO
 */
class Cruiser extends ship_1.Ship {
    /**
     * [Cruiser constructor]
     * @constructor
     * @param {Dictionary<string,MatriceCase>} shipPosition [The shipPosition is a Dictionary of all the boxes corresponding to the ship ]
     * @param {EnumOrientation}                shipOrient   [The ship orientation horizontal or vertical]
     */
    constructor(shipPosition, shipOrient) {
        const name = 'Croiseur';
        super(name, enumShip_1.EnumShip.SHIP_CROISEUR, 4, shipOrient, shipPosition);
    }
}
exports.Cruiser = Cruiser;

//# sourceMappingURL=../maps/cruiser.js.map
