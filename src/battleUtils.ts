import {MatriceCase} from "./matriceCase";

/**
 * Classe utilitaire
 */
export class BattleUtils {

	static readonly _separator :string = "-";

	static readonly _alphabet: string[] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	
	
	static horizontalPositionToAlpha(position: number) :string{
		
		return this._alphabet[position-1];
	}

	static alphaToHorizontalPosition(letter: string) :number{
		
		return this._alphabet.indexOf(letter) +1 ;
	}

	static generateKeyGrid(mCase: MatriceCase) :string{
		return this.horizontalPositionToAlpha(mCase.hor) + this._separator + mCase.vert;
	}

	static generateKeyGridByVal(hor: number, vert: number) :string{
		return this.horizontalPositionToAlpha(hor) + this._separator + vert;
	}


	

}
