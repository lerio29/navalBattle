
export default class EnumStatus {

	const SHIP_PORTE_AVION = Symbol("PA");
	const SHIP_CROISEUR = Symbol("C");
	const SHIP_CONTRE_TORPILLEUR = Symbol("CT");
	const SHIP_SUBMARINE = Symbol("SB");
	const SHIP_TORPILLEUR= Symbol("T");


	get ship() {
    	return this.getShip();
  	}

	getShip(ship) {
		
		switch(ship) {
			case SHIP_PORTE_AVION:
			    return "Porte Avion";
			case SHIP_CROISEUR:
			    return "Croiseur";
			case SHIP_CONTRE_TORPILLEUR:
			    return "Contre Torpilleur";
			case SHIP_SUBMARINE:
			    return "Sous-Marin";
			case SHIP_TORPILLEUR:
			    return "Torpilleur";            
		}

	}




}
