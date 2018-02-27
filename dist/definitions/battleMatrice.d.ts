import { Dictionary, Set } from 'typescript-collections';
import { MatriceCase } from "./matriceCase";
import { Ship } from "./ship";
/**
 * Create a battle matrix
 * @class <p>A BattleMatrice is the war floor</p>
 */
export declare class BattleMatrice {
    private _logger;
    private _matrice;
    private _size;
    private _ships;
    /**
     * [BattleMatrice constructor]
     * @param {number}  sizeMatrice [The size of th war floor : a square of value x value]
     * @param {boolean} silent      [Enable or disable logger]
     */
    constructor(sizeMatrice: number, silent: boolean);
    /**
     * [updateMatrice method update a box values]
     * @param {MatriceCase} status [Update box datas from the key]
     */
    updateMatrice(status: MatriceCase): void;
    /**
     * [addShip add a ship to the matrix]
     * @param {Ship.Ship} ship [A ship]
     */
    addShip(ship: Ship): void;
    /**
     * [addShips add a ships set to the matrix]
     * @param {Set<Ship>} ships [ships set]
     */
    addShips(ships: Set<Ship>): void;
    /**
     * [getSize Size of matrix]
     * @return {number} [Size of matrix]
     */
    readonly getSize: number;
    /**
     * [getShips Return all ships hooked in the matrix]
     * @return {Set<Ship>} [A ships set]
     */
    readonly getShips: Set<Ship>;
    /**
     * [getMatrice Return all boxes in the matrix]
     * @return {Dictionary<MatriceCase>} [A boxes dictionnary]
     */
    readonly getMatrice: Dictionary<string, MatriceCase>;
}
