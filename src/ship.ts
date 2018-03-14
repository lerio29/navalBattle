
import { Dictionary }  from 'typescript-collections';
import {MatriceCase} from "./matriceCase"; 
import {EnumShip} from "./enumShip";
import {EnumStatus} from "./enumStatus";
import {EnumOrientation} from "./enumOrientation";



	/**
	 * Create an Ship object
	 * @class <p>The ship skeleton</p>
	 * @author Vincent VILERIO
	 */
	export abstract class Ship {

		private _shipName: string;
		private _shipType: EnumShip;
		private _shipPosition: Dictionary<string,MatriceCase>;
		private _shipSize: number;
		private _shipOrient: EnumOrientation;
		private _startCase: MatriceCase;
		private _endCase: MatriceCase;
		private _sunk: boolean;
		private _hits: number;



		/**
		 * [Ship constructor]
		 * @param {string} shipName     [the ship's name]
		 * @param {EnumShip} shipType     [the ship's type]
		 * @param {number} shipSize     [the ship's size]
		 * @param {Dictionary<string,MatriceCase>} shipPosition [All ship's boxes]
		 * @param {MatriceCase} startCase    [The fist ship's box]
		 * @param {MatriceCase} endCase      [The last ship's box]
		 */
		constructor(shipName: string, shipType: EnumShip, shipSize: number, shipOrient: EnumOrientation,
			shipPosition: Dictionary<string,MatriceCase> ){
			
			this._shipName = shipName;
			this._shipType = shipType;
			this._shipSize = shipSize;
			this._shipOrient = shipOrient;
			this._shipPosition = shipPosition;
			this._sunk = false;
			this._hits = 0;

		}

		incrementHits(){
			this._hits++;			
			if(this._hits === this._shipSize){
				this._sunk = true;
			}
		}

		checkSunk() :boolean{
			return this._sunk;
		}

		/**
		 * @description [calCulStartCase Calculate the first box of the ship]
		 */
		calculStartCase(): MatriceCase{
			let min :number = 50; //valeur simplement plus grande que la taille de la grille

			if(this._shipOrient === EnumOrientation.OR_HORIZONTAL){

				for(let itemHor of this._shipPosition.values()){

	 				if(min > Math.min(min, itemHor.hor)){
						this._startCase = itemHor;
						min = itemHor.hor;
					}

				}			
			
			}else{

				for(let itemVert of this._shipPosition.values()){
					
					if(min > Math.min(min, itemVert.vert)){
						this._startCase = itemVert;
						min = itemVert.vert;
					}
					
				}	
			
			}

			return this._startCase;
		}

		/**
		 * @description [calCulEndCase Calculate the last box of the ship]
		 */
		calculEndCase(): MatriceCase{
			let max :number = -50; //valeur simplement plus petite que la taille de la grille

			if(this._shipOrient === EnumOrientation.OR_HORIZONTAL){

				for(let itemHor of this._shipPosition.values()){
					
					if(max <= Math.max(max, itemHor.hor)){
						this._endCase = itemHor;
						max = itemHor.hor;
					}
				}	
				
			
			}else{

				for(let itemVert of this._shipPosition.values()){
					
					if(max <= Math.max(max, itemVert.vert)){
						this._endCase = itemVert;
						max = itemVert.vert;
					}
					
				}	
				
			}

			return this._endCase;
		}
		

		get shipName() :string{
			return this._shipName;
		}

		set shipName(name :string){
			this._shipName = name;
		}

		get shipType() :EnumShip{
			return this._shipType;
		}

		set shipType(type :EnumShip){
			this._shipType = type;
		}

		get shipSize() :number{
			return this._shipSize;
		}

		set shipSize(size :number){
			this._shipSize = size;
		}

		get shipOrient() :EnumOrientation{
			return this._shipOrient;
		}

		set shipOrient(orient :EnumOrientation){
			this._shipOrient = orient;
		}

		get shipPosition() :Dictionary<string,MatriceCase>{
			return this._shipPosition;
		}

		set shipPosition(position :Dictionary<string,MatriceCase>){
			this._shipPosition = position;
		}



	}
