
export class BattleUtils {

	static _alphabet: string[] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	
	
	static positionToAlpha(position: number){
		
		return BattleUtils._alphabet[position - 1];
	}

	/**
	 * [getAlphabet Retourne un tableau contenant l'alphabet FR ]
	 * @return {string[]} [Alphabet français classique dans un tableau]
	 */
	// get getAlphabet():string[]{
	// 	this._alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	// 	return this._alphabet;
	// }

}
