import { BattleMatrice } from "./battleMatrice";
/**
 * Create an Player object
 * @class <p>A Player</p>
 */
export declare class Player {
    private _name;
    private _grid;
    private _targetGrid;
    /**
     * [Player constructor]
     * @constructor
     * @param {string}        name       [Player Name]
     * @param {BattleMatrice} grid       [grid associated with the player]
     * @param {BattleMatrice} targetGrid [Fire history grid]
     */
    constructor(name: string, grid?: BattleMatrice, targetGrid?: BattleMatrice);
    name: string;
    grid: BattleMatrice;
    targetGrid: BattleMatrice;
}
