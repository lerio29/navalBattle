import { Dictionary } from 'typescript-collections';
import { MatriceCase } from "./matriceCase";
import { Ship } from "./ship";
/**
 * Classe de generation de matrice/grille de bataille navale
 */
export declare class BattleMatrice {
    private _logger;
    private _matrice;
    private _size;
    /**
     * [constructor description]
     * @param {number} sizeMatrice [description]
     */
    constructor(sizeMatrice: number);
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
    readonly getSize: number;
    /**
     * [getMatrice Retourne un set de MatriceCase correspondant à la grille de la bataille navale]
     * @return {Dictionary<MatriceCase>} [description]
     */
    readonly getMatrice: Dictionary<string, MatriceCase>;
}
