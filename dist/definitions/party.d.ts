import { Player } from "./player";
import { Logger } from "./logger";
export declare class Party {
    _logger: Logger;
    private _players;
    private _timestamp;
    private _id;
    constructor(player1: Player, player2: Player);
    readonly getId: string;
    hit(fromPlayer: Player, intoPlayer: Player, hor: number, vert: number): void;
}
