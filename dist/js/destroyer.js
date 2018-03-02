"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ship_1 = require("./ship");
const enumShip_1 = require("./enumShip");
class Destroyer extends ship_1.Ship {
    constructor(shipPosition, shipOrient) {
        const name = 'Destroyer';
        super(name, enumShip_1.EnumShip.SHIP_CONTRE_TORPILLEUR, 3, shipOrient, shipPosition);
    }
}
exports.Destroyer = Destroyer;

//# sourceMappingURL=../maps/destroyer.js.map
