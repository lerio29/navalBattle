
import * as Collections from 'typescript-collections';
import * as MatriceCase from "./matriceCase"; 
import * as EnumShip from "./enumShip";
import * as EnumStatus from "./enumStatus";




	export abstract class Ship {

		protected _shipName: string;
		protected _shipType: EnumShip.EnumShip;
		protected _shipPosition: Collections.Dictionary<string,MatriceCase.MatriceCase>;
		protected _shipSize: number;
		protected _startCase: MatriceCase.MatriceCase;
		protected _endCase: MatriceCase.MatriceCase;


		/**
		 * [constructor description]
		 * @param {string}                                                 shipName     [description]
		 * @param {EnumShip.EnumShip}                                      shipType     [description]
		 * @param {number}                                                 shipSize     [description]
		 * @param {Collections.Dictionary<string,MatriceCase.MatriceCase>} shipPosition [description]
		 * @param {MatriceCase.MatriceCase}                                startCase    [description]
		 * @param {MatriceCase.MatriceCase}                                endCase      [description]
		 */
		constructor(shipName: string, shipType: EnumShip.EnumShip, shipSize: number, 
			shipPosition: Collections.Dictionary<string,MatriceCase.MatriceCase>,
			startCase?: MatriceCase.MatriceCase, endCase?: MatriceCase.MatriceCase){
			
			this._shipName = shipName;
			this._shipType = shipType;
			this._shipSize = shipSize;
			this._shipPosition = shipPosition;

			//TODO optionnelle puisque peuvent être deduit a partir du shipPosition 			
			this._startCase = startCase;
			this._endCase = endCase;
		}

		abstract calStartCase(): void;

		abstract calEndCase(): void;
		

		get getShipName() :string{
			return this._shipName;
		}

		set setShipName(name :string){
			this._shipName = name;
		}

		get getShipType() :EnumShip.EnumShip{
			return this._shipType;
		}

		set setShipType(type :EnumShip.EnumShip){
			this._shipType = type;
		}

		get getShipSize() :number{
			return this._shipSize;
		}

		set setShipSize(size :number){
			this._shipSize = size;
		}

		get getPosition() :Collections.Dictionary<string,MatriceCase.MatriceCase>{
			return this._shipPosition;
		}

		set Position(position :Collections.Dictionary<string,MatriceCase.MatriceCase>){
			this._shipPosition = position;
		}



	}
