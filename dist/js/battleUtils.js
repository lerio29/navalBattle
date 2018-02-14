"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Classe utilitaire
 */
class BattleUtils {
    static horizontalPositionToAlpha(position) {
        return this._alphabet[position - 1];
    }
    static alphaToHorizontalPosition(letter) {
        return this._alphabet.indexOf(letter) + 1;
    }
    static generateKeyGrid(mCase) {
        return this.horizontalPositionToAlpha(mCase.vert) + this._separator + mCase.hor;
    }
    static generateKeyGridByVal(vert, hor) {
        return this.horizontalPositionToAlpha(vert) + this._separator + hor;
    }
}
BattleUtils._separator = "-";
BattleUtils._alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
exports.BattleUtils = BattleUtils;
