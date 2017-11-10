 import * as BattleMatrice from "./battleMatrice"; 



 export class Player {

 	private _name :string = undefined;
 	private _grid :BattleMatrice.BattleMatrice = undefined;
 	private _targetGrid :BattleMatrice.BattleMatrice = undefined;

 	//TODO ajouter une deuxième grid pour avoir le bilan du tir sur la grid ennemie
 	

 	/**
 	 * [Constructeur du joueur et des grilles de jeu associées]
 	 * @param {string}                      name       [Nom du joueur]
 	 * @param {BattleMatrice.BattleMatrice} grid       [Grille du joueur]
 	 * @param {BattleMatrice.BattleMatrice} targetGrid [Grille recapitulative des tirs sur l ennemi ]
 	 */
 	constructor(name :string, grid ?:BattleMatrice.BattleMatrice, targetGrid ?:BattleMatrice.BattleMatrice){
 		this._name = name;
 		this._grid = grid;
 		this._targetGrid = targetGrid;
 	}



 	get getName() :string{
			return this._name;
		}

	set setName(name :string){
		this._name = name;
	}

	get getGrid() :BattleMatrice.BattleMatrice{
			return this._grid;
		}

	set setGrid(grid :BattleMatrice.BattleMatrice){
		this._grid = grid;
	}

	get getTargetGrid() :BattleMatrice.BattleMatrice{
			return this._targetGrid;
		}

	set setTargetGrid(targetGrid :BattleMatrice.BattleMatrice){
		this._targetGrid = targetGrid;
	}





 }