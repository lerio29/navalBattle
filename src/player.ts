import {BattleMatrice} from "./battleMatrice"; 


/**
 * Create an Player object
 * @class <p>A Player</p>
 */
 export class Player {

 	private _name :string = undefined;
 	private _grid :BattleMatrice = undefined;
 	private _targetGrid :BattleMatrice = undefined;

 	//TODO ajouter une deuxième grid pour avoir le bilan du tir sur la grid ennemie
 	

 	/**
 	 * [Player constructor]
 	 * @constructor
 	 * @param {string}        name       [Player Name]
 	 * @param {BattleMatrice} grid       [grid associated with the player]
 	 * @param {BattleMatrice} targetGrid [Fire history grid]
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