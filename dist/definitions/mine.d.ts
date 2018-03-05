import { Ship } from "./ship";
import { Dictionary } from 'typescript-collections';
import { MatriceCase } from "./matriceCase";
import { EnumOrientation } from "./enumOrientation";
/**
 * Create an Mine object
 * @class <p>A Mine is a Ship with a lenght of 1</p>
 */
export declare class Mine extends Ship {
    /**
     * [Mine constructor]
     * @constructor
     * @param {Dictionary<string,MatriceCase>} shipPosition [The shipPosition is a Dictionary of all the boxes corresponding to the ship ]
     * @param {EnumOrientation}                shipOrient   [The ship orientation horizontal or vertical]
     */
    constructor(shipPosition: Dictionary<string, MatriceCase>, shipOrient: EnumOrientation);
}
