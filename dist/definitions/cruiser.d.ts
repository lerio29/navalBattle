import { Ship } from "./ship";
import { Dictionary } from 'typescript-collections';
import { MatriceCase } from "./matriceCase";
import { EnumOrientation } from "./enumOrientation";
/**
 * Create an Cruiser object
 * @class <p>A Cruiser is a Ship with a lenght of 4</p>
 * @author Vincent VILERIO
 */
export declare class Cruiser extends Ship {
    /**
     * [Cruiser constructor]
     * @constructor
     * @param {Dictionary<string,MatriceCase>} shipPosition [The shipPosition is a Dictionary of all the boxes corresponding to the ship ]
     * @param {EnumOrientation}                shipOrient   [The ship orientation horizontal or vertical]
     */
    constructor(shipPosition: Dictionary<string, MatriceCase>, shipOrient: EnumOrientation);
}
