import {MatriceCase} from "./matriceCase";
import {Ship} from "./ship";

/**
 * Tools class
 * @class <p>Tools class</p>
 */
export class BattleUtils {

	static readonly _separator :string = "-";

	static readonly _alphabet: string[] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	
	
	/**
	 * [horizontalPositionToAlpha Convert a number into a horizontal alphaNumeric position]
	 * @param  {number} position [A number position]
	 * @return {string}          [A character representation of the horizontal position]
	 */
	static horizontalPositionToAlpha(position: number) :string{
		
		return this._alphabet[position-1];
	}

/**
 * [alphaToVerticalPosition Convert a character into a horizontal number position]
 * @param  {string} letter [A character representation of the horizontal position]
 * @return {number}        [A number representation of the horizontal position]
 */
	static alphaToVerticalPosition(letter: string) :number{
		
		return this._alphabet.indexOf(letter) +1 ;
	}

/**
 * [generateKeyGrid description]
 * @param  {MatriceCase} mCase [description]
 * @return {string}            [description]
 */
	static generateKeyGrid(mCase: MatriceCase) :string{
		return this.horizontalPositionToAlpha(mCase.hor) + this._separator + mCase.vert;
	}

	/**
	 * [generateKeyGridByVal description]
	 * @param  {number} hor  [description]
	 * @param  {number} vert [description]
	 * @return {string}      [description]
	 */
	static generateKeyGridByVal(hor: number, vert: number) :string{
		return this.horizontalPositionToAlpha(hor) + this._separator + vert;
	}

/**
 * [checkPosition description]
 * @param  {MatriceCase} mCase    [description]
 * @param  {number}      gridSize [description]
 * @return {boolean}              [description]
 */
	static checkPosition(mCase :MatriceCase, gridSize :number) :boolean{
		if(mCase.vert <= 0  || mCase.hor <= 0 || mCase.hor > gridSize || mCase.vert > gridSize ){
			return false;
		}

		return true;
	}


	

}
