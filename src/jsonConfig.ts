

/**
 * @author Vincent VILERIO
 */
export interface ShipsConfig {

	aircraftCarrier :number;
	cruiser :number;
	destroyer :number;
	submarine :number;
	mine	:number;

	
}

export interface JsonConfig {

	gridSize :number;
	ships :ShipsConfig;

	
}

