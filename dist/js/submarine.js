"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ship_1 = require("./ship");
const enumShip_1 = require("./enumShip");
/**
 * Create an Submarine object
 * @class <p>A Submarine is a Ship with a lenght of 3</p>
 * @author Vincent VILERIO
 */
class Submarine extends ship_1.Ship {
    /**
     * [Submarine constructor]
     * @constructor
     * @param {Dictionary<string,MatriceCase>} shipPosition [The shipPosition is a Dictionary of all the boxes corresponding to the ship ]
     * @param {EnumOrientation}                shipOrient   [The ship orientation horizontal or vertical]
     */
    constructor(shipPosition, shipOrient) {
        const name = 'Sous-marin';
        super(name, enumShip_1.EnumShip.SHIP_SUBMARINE, 3, shipOrient, shipPosition);
    }
}
exports.Submarine = Submarine;

//# sourceMappingURL=../maps/submarine.js.map
