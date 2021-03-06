"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const matriceCase_1 = require("./matriceCase");
const sha1 = require("sha1/sha1");
/**
 * Tools class
 * @class <p>Tools class</p>
 * @author Vincent VILERIO
 */
class BattleUtils {
    /**
     * @description [horizontalPositionToAlpha Convert a number into a horizontal alphaNumeric position]
     * @param  {number} position [A number position]
     * @return {string}          [A character representation of the horizontal position]
     */
    static horizontalPositionToAlpha(position) {
        return this._alphabet[position - 1];
    }
    /**
     * @description [alphaToVerticalPosition Convert a character into a horizontal number position]
     * @param  {string} letter [A character representation of the horizontal position]
     * @return {number}        [A number representation of the horizontal position]
     */
    static alphaToVerticalPosition(letter) {
        return this._alphabet.indexOf(letter) + 1;
    }
    /**
     * @description [generateKeyGrid Generate a key from a MatriceCase object]
     * @param  {MatriceCase} mCase [A matrix box object]
     * @return {string}            [The key generated]
     */
    static generateKeyGrid(mCase) {
        return this.horizontalPositionToAlpha(mCase.hor) + this._separator + mCase.vert;
    }
    /**
     * @description [generateKeyGridByVal Generate a key from vertical/horizontal values]
     * @param  {number} hor  [horizontal value]
     * @param  {number} vert [vertical value]
     * @return {string}      [The key generated]
     */
    static generateKeyGridByVal(hor, vert) {
        return this.horizontalPositionToAlpha(hor) + this._separator + vert;
    }
    /**
     * @description [checkPosition Check the existence of a box]
     * @param  {MatriceCase} mCase    [Box to verify]
     * @param  {number}      gridSize [The matrix size]
     * @return {boolean}              [The Result]
     */
    static checkPosition(mCase, gridSize) {
        if (mCase.vert <= 0 || mCase.hor <= 0 || mCase.hor > gridSize || mCase.vert > gridSize) {
            return false;
        }
        return true;
    }
    /**
     * @description [checkPosition Check the existence of boxes]
     * @param  {Set<MatriceCase>} mCase    [Boxes to verify]
     * @param  {number}      gridSize [The matrix size]
     * @return {boolean}              [The Result]
     */
    static checkAllPositions(mCases, gridSize) {
        for (let mCase of mCases.toArray()) {
            if (mCase.vert <= 0 || mCase.hor <= 0 || mCase.hor > gridSize || mCase.vert > gridSize) {
                return false;
            }
        }
        return true;
    }
    static createUniqueId() {
        return sha1('uid-' + Math.random().toString(36).substr(2, 16) + new Date().getTime());
    }
    static autoInstallShip(max) {
        // On renvoie un nombre aléatoire entre le nombre 1 (inclus) 
        // et une valeur max (exclue)
        let horRandom = Math.floor(Math.random() * (max - 1) + 1);
        let vertRandom = Math.floor(Math.random() * (max - 1) + 1);
        let positionRandom = Math.floor(Math.random() * 2 + 1);
        let initCase = new matriceCase_1.MatriceCase(horRandom, vertRandom);
        return initCase;
    }
}
BattleUtils._separator = "-";
BattleUtils._alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
exports.BattleUtils = BattleUtils;

//# sourceMappingURL=../maps/battleUtils.js.map
