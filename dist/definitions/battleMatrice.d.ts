import { Dictionary, Set } from 'typescript-collections';
import { MatriceCase } from "./matriceCase";
import { EnumShip } from "./enumShip";
import { Ship } from "./ship";
/**
 * Create a battle matrix
 * @class <p>A BattleMatrice is the war floor</p>
 * @author Vincent VILERIO
 */
export declare class BattleMatrice {
    private _logger;
    private _matrice;
    private _size;
    private _ships;
    private _idHash;
    /**
     * [BattleMatrice constructor]
     * @param {number}  sizeMatrice [The size of th war floor : a square of value x value]
     * @param {boolean} silent      [Enable or disable logger]
     *
     *
     */
    constructor(sizeMatrice: number, silent: boolean);
    autoInstallShip(): void;
    /**
     * @description [updateMatrice method update a box values]
     * @param {MatriceCase} status [Update box datas from the key]
     */
    updateMatrice(status: MatriceCase): Dictionary<string, MatriceCase>;
    /**
     * @description [addShip add a ship to the matrix]
     * @param {Ship.Ship} ship [A ship]
     */
    addShip(ship: Ship): void;
    /**
     * @description [addShips add a ships set to the matrix]
     * @param {Set<Ship>} ships [ships set]
     */
    addShips(ships: Set<Ship>): void;
    /**
     * [checkShipIsSet description]
     * @param  {number}   hor  [description]
     * @param  {number}   vert [description]
     * @return {EnumShip}      [description]
     */
    checkShipIsSet(hor: number, vert: number): EnumShip;
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
    readonly getIdHash: string;
}
