import {EnumStatus} from "./enumStatus";
import {Player} from "./player";

export interface HitResponse {

	status :EnumStatus;
	fromPlayer :Player;
	intoPlayer :Player;

	
}