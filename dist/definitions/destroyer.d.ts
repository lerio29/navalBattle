import { Ship } from "./ship";
import { Dictionary } from 'typescript-collections';
import { MatriceCase } from "./matriceCase";
import { EnumOrientation } from "./enumOrientation";
/**
 * Create an Destroyer object
 * @class <p>A Destroyer is a Ship with a lenght of 3</p>
 * @author Vincent VILERIO
 */
export declare class Destroyer extends Ship {
    /**
     * [Destroyer constructor]
     * @constructor
     * @param {Dictionary<string,MatriceCase>} shipPosition [The shipPosition is a Dictionary of all the boxes corresponding to the ship ]
     * @param {EnumOrientation}                shipOrient   [The ship orientation horizontal or vertical]
     */
    constructor(shipPosition: Dictionary<string, MatriceCase>, shipOrient: EnumOrientation);
}
