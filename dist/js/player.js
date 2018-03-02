"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    //TODO ajouter une deuxième grid pour avoir le bilan du tir sur la grid ennemie
    /**
     * [Constructeur du joueur et des grilles de jeu associées]
     * @param {string}                      name       [Nom du joueur]
     * @param {BattleMatrice} grid       [Grille du joueur]
     * @param {BattleMatrice} targetGrid [Grille recapitulative des tirs sur l ennemi ]
     */
    constructor(name, grid, targetGrid) {
        this._name = undefined;
        this._grid = undefined;
        this._targetGrid = undefined;
        this._name = name;
        this._grid = grid;
        this._targetGrid = targetGrid;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get grid() {
        return this._grid;
    }
    set grid(grid) {
        this._grid = grid;
    }
    get targetGrid() {
        return this._targetGrid;
    }
    set targetGrid(targetGrid) {
        this._targetGrid = targetGrid;
    }
}
exports.Player = Player;

//# sourceMappingURL=../maps/player.js.map
