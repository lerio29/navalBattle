"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ship_1 = require("./ship");
const enumShip_1 = require("./enumShip");
/**
 * Create an Destroyer object
 * @class <p>A Destroyer is a Ship with a lenght of 3</p>
 * @author Vincent VILERIO
 */
class Destroyer extends ship_1.Ship {
    /**
     * [Destroyer constructor]
     * @constructor
     * @param {Dictionary<string,MatriceCase>} shipPosition [The shipPosition is a Dictionary of all the boxes corresponding to the ship ]
     * @param {EnumOrientation}                shipOrient   [The ship orientation horizontal or vertical]
     */
    constructor(shipPosition, shipOrient) {
        const name = 'Destroyer';
        super(name, enumShip_1.EnumShip.SHIP_CONTRE_TORPILLEUR, 3, shipOrient, shipPosition);
    }
}
exports.Destroyer = Destroyer;

//# sourceMappingURL=../maps/destroyer.js.map
