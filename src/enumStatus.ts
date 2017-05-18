
export default class EnumStatus {

	const STATUS_EMPTY = Symbol("V");
	const STATUS_HIT = Symbol("T");
	const STATUS_FAIL = Symbol("R");

	get status() {
    	return this.getStatus();
  	}

	getStatus(status) {
		
		switch(status) {
			case STATUS_EMPTY:
			    return "Vide";
			case STATUS_HIT:
			    return "Touche";
			case STATUS_FAIL:
			    return "Rate";   
		}

	}

}
