import { Player } from "./player";
import { EnumStatus } from "./enumStatus";
import { Logger } from "./logger";
import { Dictionary } from 'typescript-collections';
/**
 * Create an Party object
 * @class <p>A Party</p>
 * @author Vincent VILERIO
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
    hit(fromPlayerUid: string, intoPlayerUid: string, hor: number, vert: number): EnumStatus;
    /**
     * [getId description]
     * @return {string} [description]
     */
    readonly getId: string;
    readonly getPlayers: Dictionary<string, Player>;
}
