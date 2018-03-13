import {MatriceCase} from "./matriceCase";
import { Dictionary, Set }  from 'typescript-collections';
import {Ship} from "./ship";
import * as sha1 from 'sha1/sha1';
import * as loadJsonFile from 'load-json-file';
import {JsonConfig, ShipsConfig} from "./jsonConfig";
import {JsonConvert} from "json2typescript";

/**
 * Tools class
 * @class <p>Tools class</p>
 * @author Vincent VILERIO
 */
export class BattleUtils {

	static readonly _separator :string = "-";

	static readonly _alphabet: string[] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	
	
	/**
	 * @description [horizontalPositionToAlpha Convert a number into a horizontal alphaNumeric position]
	 * @param  {number} position [A number position]
	 * @return {string}          [A character representation of the horizontal position]
	 */
	static horizontalPositionToAlpha(position: number) :string{
		
		return this._alphabet[position-1];
	}

	/**
	 * @description [alphaToVerticalPosition Convert a character into a horizontal number position]
	 * @param  {string} letter [A character representation of the horizontal position]
	 * @return {number}        [A number representation of the horizontal position]
	 */
	static alphaToVerticalPosition(letter: string) :number{
		
		return this._alphabet.indexOf(letter) +1 ;
	}

	/**
	 * @description [generateKeyGrid Generate a key from a MatriceCase object]
	 * @param  {MatriceCase} mCase [A matrix box object]
	 * @return {string}            [The key generated]
	 */
	static generateKeyGrid(mCase: MatriceCase) :string{
		return this.horizontalPositionToAlpha(mCase.hor) + this._separator + mCase.vert;
	}

	/**
	 * @description [generateKeyGridByVal Generate a key from vertical/horizontal values]
	 * @param  {number} hor  [horizontal value]
	 * @param  {number} vert [vertical value]
	 * @return {string}      [The key generated]
	 */
	static generateKeyGridByVal(hor: number, vert: number) :string{
		return this.horizontalPositionToAlpha(hor) + this._separator + vert;
	}

	/**
	 * @description [checkPosition Check the existence of a box]
	 * @param  {MatriceCase} mCase    [Box to verify]
	 * @param  {number}      gridSize [The matrix size]
	 * @return {boolean}              [The Result]
	 */
	static checkPosition(mCase :MatriceCase, gridSize :number) :boolean{
		if(mCase.vert <= 0  || mCase.hor <= 0 || mCase.hor > gridSize || mCase.vert > gridSize ){
			return false;
		}

		return true;
	}

	/**
	 * @description [checkPosition Check the existence of boxes]
	 * @param  {Set<MatriceCase>} mCase    [Boxes to verify]
	 * @param  {number}      gridSize [The matrix size]
	 * @return {boolean}              [The Result]
	 */
	static checkAllPositions(mCases :Set<MatriceCase>, gridSize :number) :boolean{
		for(let mCase of mCases.toArray()){
			if(mCase.vert <= 0  || mCase.hor <= 0 || mCase.hor > gridSize || mCase.vert > gridSize ){
				return false;
			}
		}

		return true;
	}

	static createUniqueId():string{
		return sha1('uid-' + Math.random().toString(36).substr(2, 16) + new Date().getTime());
	}

	// static getMetaGridSize():number{
	// 	let res :number = undefined;
	// 	loadJsonFile('meta/config1.json').then(json => {
	// 		console.log("toto" + json.gridSize)
	// 		res = Number(json.gridSize);
		   
	// 	}).catch(err => {
	// 		console.error("Method getMeta error : " + err);
			
	// 	});
	// 	return res;
		
	// }

}
