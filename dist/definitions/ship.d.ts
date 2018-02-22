import { Dictionary } from 'typescript-collections';
import { MatriceCase } from "./matriceCase";
import { EnumShip } from "./enumShip";
import { EnumOrientation } from "./enumOrientation";
export declare abstract class Ship {
    protected _shipName: string;
    protected _shipType: EnumShip;
    protected _shipPosition: Dictionary<string, MatriceCase>;
    protected _shipSize: number;
    protected _shipOrient: EnumOrientation;
    protected _startCase: MatriceCase;
    protected _endCase: MatriceCase;
    /**
     * [constructor description]
     * @param {string}                                                 shipName     [description]
     * @param {EnumShip}                                      shipType     [description]
     * @param {number}                                                 shipSize     [description]
     * @param {Dictionary<string,MatriceCase>} shipPosition [description]
     * @param {MatriceCase}                                startCase    [description]
     * @param {MatriceCase}                                endCase      [description]
     */
    constructor(shipName: string, shipType: EnumShip, shipSize: number, shipOrient: EnumOrientation, shipPosition: Dictionary<string, MatriceCase>);
    /**
     * [calCulStartCase description]
     */
    abstract calculStartCase(): void;
    /**
     * [calCulEndCase description]
     */
    abstract calculEndCase(): void;
    shipName: string;
    shipType: EnumShip;
    shipSize: number;
    shipOrient: EnumOrientation;
    shipPosition: Dictionary<string, MatriceCase>;
}
