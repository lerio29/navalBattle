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
     * [addShip description]
     * @param {Ship.Ship} ship [description]
     */
    addShip(ship: Ship): void;
    /**
     * [addShips description]
     * @param {Set<Ship>} ships [description]
     */
    addShips(ships: Set<Ship>): void;
    /**
     * [getSize description]
     * @return {number} [description]
     */
    readonly getSize: number;
    /**
     * [getShips description]
     * @return {Set<Ship>} [description]
     */
    readonly getShips: Set<Ship>;
    /**
     * [getMatrice Retourne un set de MatriceCase correspondant à la grille de la bataille navale]
     * @return {Dictionary<MatriceCase>} [description]
     */
    readonly getMatrice: Dictionary<string, MatriceCase>;
}
