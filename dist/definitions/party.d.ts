import { Player } from "./player";
export declare class Party {
    private _players;
    private _timestamp;
    private _id;
    constructor(player1: Player, player2: Player);
    readonly getId: string;
    hit(fromPlayer: Player, intoPlayer: Player, hor: number, vert: number): void;
}
