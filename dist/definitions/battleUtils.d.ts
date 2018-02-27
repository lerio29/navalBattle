import { MatriceCase } from "./matriceCase";
/**
 * Tools class
 * @class <p>Tools class</p>
 */
export declare class BattleUtils {
    static readonly _separator: string;
    static readonly _alphabet: string[];
    /**
     * [horizontalPositionToAlpha Convert a number into a horizontal alphaNumeric position]
     * @param  {number} position [A number position]
     * @return {string}          [A character representation of the horizontal position]
     */
    static horizontalPositionToAlpha(position: number): string;
    /**
     * [alphaToVerticalPosition Convert a character into a horizontal number position]
     * @param  {string} letter [A character representation of the horizontal position]
     * @return {number}        [A number representation of the horizontal position]
     */
    static alphaToVerticalPosition(letter: string): number;
    /**
     * [generateKeyGrid description]
     * @param  {MatriceCase} mCase [description]
     * @return {string}            [description]
     */
    static generateKeyGrid(mCase: MatriceCase): string;
    /**
     * [generateKeyGridByVal description]
     * @param  {number} hor  [description]
     * @param  {number} vert [description]
     * @return {string}      [description]
     */
    static generateKeyGridByVal(hor: number, vert: number): string;
    /**
     * [checkPosition description]
     * @param  {MatriceCase} mCase    [description]
     * @param  {number}      gridSize [description]
     * @return {boolean}              [description]
     */
    static checkPosition(mCase: MatriceCase, gridSize: number): boolean;
}
