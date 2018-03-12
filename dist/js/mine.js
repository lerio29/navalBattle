"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ship_1 = require("./ship");
const enumShip_1 = require("./enumShip");
/**
 * Create an Mine object
 * @class <p>A Mine is a Ship with a lenght of 1</p>
 * @author Vincent VILERIO
 */
class Mine extends ship_1.Ship {
    /**
     * [Mine constructor]
     * @constructor
     * @param {Dictionary<string,MatriceCase>} shipPosition [The shipPosition is a Dictionary of all the boxes corresponding to the ship ]
     * @param {EnumOrientation}                shipOrient   [The ship orientation horizontal or vertical]
     */
    constructor(shipPosition, shipOrient) {
        const name = 'Mine';
        super(name, enumShip_1.EnumShip.SHIP_MINE, 1, shipOrient, shipPosition);
    }
}
exports.Mine = Mine;

//# sourceMappingURL=../maps/mine.js.map
