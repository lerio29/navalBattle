import { Dictionary, Set } from 'typescript-collections';
import { MatriceCase } from "./matriceCase";
import { Ship } from "./ship";
/**
 * Classe de generation de matrice/grille de bataille navale
 */
export declare class BattleMatrice {
    private _logger;
    private _matrice;
    private _size;
    private _ships;
    /**
     * [constructor description]
     * @param {number} sizeMatrice [description]
     */
    constructor(sizeMatrice: number, silent: boolean);
    /**
     * [updateMatrice description]
     * @param {MatriceCase} status [description]
     */
    updateMatrice(status: MatriceCase): void;
    /**
     * [addShip description]
     * @param {Ship.Ship} ship [description]
     */
    addShip(ship: Ship): void;
    addShips(ships: Set<Ship>): void;
    readonly getSize: number;
    readonly getShips: Set<Ship>;
    /**
     * [getMatrice Retourne un set de MatriceCase correspondant à la grille de la bataille navale]
     * @return {Dictionary<MatriceCase>} [description]
     */
    readonly getMatrice: Dictionary<string, MatriceCase>;
}
