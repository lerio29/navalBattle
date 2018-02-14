import { BattleMatrice } from "./battleMatrice";
export declare class Player {
    private _name;
    private _grid;
    private _targetGrid;
    /**
     * [Constructeur du joueur et des grilles de jeu associées]
     * @param {string}                      name       [Nom du joueur]
     * @param {BattleMatrice} grid       [Grille du joueur]
     * @param {BattleMatrice} targetGrid [Grille recapitulative des tirs sur l ennemi ]
     */
    constructor(name: string, grid?: BattleMatrice, targetGrid?: BattleMatrice);
    name: string;
    grid: BattleMatrice;
    targetGrid: BattleMatrice;
}
