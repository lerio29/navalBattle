"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ship_1 = require("./ship");
const enumShip_1 = require("./enumShip");
class Submarine extends ship_1.Ship {
    constructor(shipPosition, shipOrient) {
        const name = 'Sous-marin';
        super(name, enumShip_1.EnumShip.SHIP_SUBMARINE, 3, shipOrient, shipPosition);
    }
}
exports.Submarine = Submarine;

//# sourceMappingURL=../maps/submarine.js.map
