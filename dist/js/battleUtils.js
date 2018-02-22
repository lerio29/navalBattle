"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Classe utilitaire
 */
class BattleUtils {
    static horizontalPositionToAlpha(position) {
        return this._alphabet[position - 1];
    }
    static alphaToVerticalPosition(letter) {
        return this._alphabet.indexOf(letter) + 1;
    }
    static generateKeyGrid(mCase) {
        return this.horizontalPositionToAlpha(mCase.hor) + this._separator + mCase.vert;
    }
    static generateKeyGridByVal(hor, vert) {
        return this.horizontalPositionToAlpha(hor) + this._separator + vert;
    }
    static checkPosition(mCase, gridSize) {
        if (mCase.vert <= 0 || mCase.hor <= 0 || mCase.hor > gridSize || mCase.vert > gridSize) {
            return false;
        }
        return true;
    }
}
BattleUtils._separator = "-";
BattleUtils._alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
exports.BattleUtils = BattleUtils;
