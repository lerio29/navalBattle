"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Représentation d'une case de la grille de jeu
 */
class MatriceCase {
    constructor(hor, vert, state) {
        this.hor = hor;
        this.vert = vert;
        this.state = state;
    }
    updateStatus(state) {
        this.state = state;
    }
    toString() {
        return "hor: " + this._hor + ", vert: " + this._vert + ", state: " + this._state;
    }
    get hor() {
        return this._hor;
    }
    get vert() {
        return this._vert;
    }
    get state() {
        return this._state;
    }
    set hor(val) {
        this._hor = val;
    }
    set vert(val) {
        this._vert = val;
    }
    set state(val) {
        this._state = val;
    }
}
exports.MatriceCase = MatriceCase;
