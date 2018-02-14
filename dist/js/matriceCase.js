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
        return "hor: " + this.hor + ", vert: " + this.vert + ", state: " + this.state;
    }
}
exports.MatriceCase = MatriceCase;
