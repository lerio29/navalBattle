import { MatriceCase } from "./matriceCase";
import { Set } from 'typescript-collections';
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
     * [generateKeyGrid Generate a key from a MatriceCase object]
     * @param  {MatriceCase} mCase [A matrix box object]
     * @return {string}            [The key generated]
     */
    static generateKeyGrid(mCase: MatriceCase): string;
    /**
     * [generateKeyGridByVal Generate a key from vertical/horizontal values]
     * @param  {number} hor  [horizontal value]
     * @param  {number} vert [vertical value]
     * @return {string}      [The key generated]
     */
    static generateKeyGridByVal(hor: number, vert: number): string;
    /**
     * [checkPosition Check the existence of a box]
     * @param  {MatriceCase} mCase    [Box to verify]
     * @param  {number}      gridSize [The matrix size]
     * @return {boolean}              [The Result]
     */
    static checkPosition(mCase: MatriceCase, gridSize: number): boolean;
    /**
     * [checkPosition Check the existence of boxes]
     * @param  {Set<MatriceCase>} mCase    [Boxes to verify]
     * @param  {number}      gridSize [The matrix size]
     * @return {boolean}              [The Result]
     */
    static checkAllPositions(mCases: Set<MatriceCase>, gridSize: number): boolean;
}
