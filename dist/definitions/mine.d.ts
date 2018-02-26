import { Ship } from "./ship";
import { Dictionary } from 'typescript-collections';
import { MatriceCase } from "./matriceCase";
import { EnumOrientation } from "./enumOrientation";
export declare class Mine extends Ship {
    constructor(shipPosition: Dictionary<string, MatriceCase>, shipOrient: EnumOrientation);
}
