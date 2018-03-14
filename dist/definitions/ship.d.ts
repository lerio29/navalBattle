import { Dictionary } from 'typescript-collections';
import { MatriceCase } from "./matriceCase";
import { EnumShip } from "./enumShip";
import { EnumOrientation } from "./enumOrientation";
/**
 * Create an Ship object
 * @class <p>The ship skeleton</p>
 * @author Vincent VILERIO
 */
export declare abstract class Ship {
    private _shipName;
    private _shipType;
    private _shipPosition;
    private _shipSize;
    private _shipOrient;
    private _startCase;
    private _endCase;
    private _sunk;
    private _hits;
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
    incrementHits(): void;
    checkSunk(): boolean;
    /**
     * @description [calCulStartCase Calculate the first box of the ship]
     */
    calculStartCase(): MatriceCase;
    /**
     * @description [calCulEndCase Calculate the last box of the ship]
     */
    calculEndCase(): MatriceCase;
    shipName: string;
    shipType: EnumShip;
    shipSize: number;
    shipOrient: EnumOrientation;
    shipPosition: Dictionary<string, MatriceCase>;
}
