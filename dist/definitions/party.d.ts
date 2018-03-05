import { Player } from "./player";
import { Logger } from "./logger";
/**
 * Create an Party object
 * @class <p>A Party</p>
 */
export declare class Party {
    _logger: Logger;
    private _players;
    private _timestamp;
    private _id;
    /**
     * [Party constructor]
     * @constructor
     * @param {Player} player1 [The first player]
     * @param {Player} player2 [The second player]
     */
    constructor(player1: Player, player2: Player);
    /**
     * @description [hit For to shoot on a enemy ship ]
     * @param {Player} fromPlayer [Player behind the shot]
     * @param {Player} intoPlayer [Player undergoing shooting]
     * @param {number} hor        [Horizontal target]
     * @param {number} vert       [Vertical targer]
     */
    hit(fromPlayer: Player, intoPlayer: Player, hor: number, vert: number): void;
    readonly getId: string;
}
