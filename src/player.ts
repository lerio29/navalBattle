import {BattleMatrice} from "./battleMatrice"; 



 export class Player {

 	private _name :string = undefined;
 	private _grid :BattleMatrice = undefined;
 	private _targetGrid :BattleMatrice = undefined;

 	//TODO ajouter une deuxième grid pour avoir le bilan du tir sur la grid ennemie
 	

 	/**
 	 * [Constructeur du joueur et des grilles de jeu associées]
 	 * @param {string}                      name       [Nom du joueur]
 	 * @param {BattleMatrice} grid       [Grille du joueur]
 	 * @param {BattleMatrice} targetGrid [Grille recapitulative des tirs sur l ennemi ]
 	 */
 	constructor(name :string, grid ?:BattleMatrice, targetGrid ?:BattleMatrice){
 		this._name = name;
 		this._grid = grid;
 		this._targetGrid = targetGrid;
 	}



 	get name() :string{
			return this._name;
		}

	set name(name :string){
		this._name = name;
	}

	get grid() :BattleMatrice{
			return this._grid;
		}

	set grid(grid :BattleMatrice){
		this._grid = grid;
	}

	get targetGrid() :BattleMatrice{
			return this._targetGrid;
		}

	set targetGrid(targetGrid :BattleMatrice){
		this._targetGrid = targetGrid;
	}





 }