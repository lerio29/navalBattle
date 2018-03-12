import { EnumStatus } from "./enumStatus";
import { Player } from "./player";
/**
 * @author Vincent VILERIO
 */
export interface HitResponse {
    status: EnumStatus;
    fromPlayer: Player;
    intoPlayer: Player;
}
