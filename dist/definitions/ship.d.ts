import { Dictionary } from 'typescript-collections';
import { MatriceCase } from "./matriceCase";
import { EnumShip } from "./enumShip";
import { EnumOrientation } from "./enumOrientation";
/**
 * Create an Ship object
 * @class <p>The ship skeleton</p>
 */
export declare abstract class Ship {
    protected _shipName: string;
    protected _shipType: EnumShip;
    protected _shipPosition: Dictionary<string, MatriceCase>;
    protected _shipSize: number;
    protected _shipOrient: EnumOrientation;
    protected _startCase: MatriceCase;
    protected _endCase: MatriceCase;
    /**
     * [Ship constructor]
     * @param {string} shipName     [the ship's name]
     * @param {EnumShip} shipType     [the ship's type]
     * @param {number} shipSize     [the ship's size]
     * @param {Dictionary<string,MatriceCase>} shipPosition [All ship's boxes]
     * @param {MatriceCase} startCase    [The fist ship's box]
     * @param {MatriceCase} endCase      [The last ship's box]
     */
    constructor(shipName: string, shipType: EnumShip, shipSize: number, shipOrient: EnumOrientation, shipPosition: Dictionary<string, MatriceCase>);
    /**
     * [calCulStartCase Calculate the first box of the ship]
     */
    calculStartCase(): MatriceCase;
    /**
     * [calCulEndCase Calculate the last box of the ship]
     */
    calculEndCase(): MatriceCase;
    shipName: string;
    shipType: EnumShip;
    shipSize: number;
    shipOrient: EnumOrientation;
    shipPosition: Dictionary<string, MatriceCase>;
}
