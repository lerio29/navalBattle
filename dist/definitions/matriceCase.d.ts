import { EnumStatus } from "./enumStatus";
/**
 * Représentation d'une case de la grille de jeu
 */
export declare class MatriceCase {
    private _hor;
    private _vert;
    private _state;
    constructor(hor: number, vert: number, state: EnumStatus);
    updateStatus(state: EnumStatus): void;
    toString(): string;
    hor: number;
    vert: number;
    state: EnumStatus;
}
