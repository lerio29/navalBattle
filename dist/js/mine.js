"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ship_1 = require("./ship");
const enumShip_1 = require("./enumShip");
class Mine extends ship_1.Ship {
    constructor(shipPosition, shipOrient) {
        const name = 'Mine';
        super(name, enumShip_1.EnumShip.SHIP_MINE, 1, shipOrient, shipPosition);
    }
}
exports.Mine = Mine;

//# sourceMappingURL=../maps/mine.js.map
