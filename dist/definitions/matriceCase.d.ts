import { EnumStatus } from "./enumStatus";
/**
 * Représentation d'une case de la grille de jeu
 */
export declare class MatriceCase {
    hor: number;
    vert: number;
    state: EnumStatus;
    constructor(hor: number, vert: number, state: EnumStatus);
    updateStatus(state: EnumStatus): void;
    toString(): string;
}
