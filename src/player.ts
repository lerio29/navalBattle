 import * as BattleMatrice from "./battleMatrice"; 



 export class Player {

 	private _name :string = undefined;
 	private _grille :BattleMatrice.BattleMatrice = undefined;

 	//TODO ajouter une deuxième grille pour avoir le bilan du tir sur la grille ennemie
 	


 	constructor(name :string, grille ?:BattleMatrice.BattleMatrice){
 		this._name = name;
 		this._grille = grille;
 	}



 	get getName() :string{
			return this._name;
		}

	set setName(name :string){
		this._name = name;
	}

	get getGrille() :BattleMatrice.BattleMatrice{
			return this._grille;
		}

	set setGrille(grille :BattleMatrice.BattleMatrice){
		this._grille = grille;
	}



 }