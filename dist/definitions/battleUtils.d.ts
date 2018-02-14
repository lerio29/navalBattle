import { MatriceCase } from "./matriceCase";
/**
 * Classe utilitaire
 */
export declare class BattleUtils {
    static readonly _separator: string;
    static readonly _alphabet: string[];
    static horizontalPositionToAlpha(position: number): string;
    static alphaToHorizontalPosition(letter: string): number;
    static generateKeyGrid(mCase: MatriceCase): string;
    static generateKeyGridByVal(vert: number, hor: number): string;
}
