import { EnumStatus } from "./enumStatus";
/**
 * Create a matrix box object
 * @class <p>A MatriceCase contains all information for a matrix box.</p>
 * @author Vincent VILERIO
 */
export declare class MatriceCase {
    private _hor;
    private _vert;
    private _state;
    /**
     * @constructor [MatriceCase constructor]
     * @param {number}  hor [The horizontal value]
     * @param {number}  vert [The vertical value]
     * @param {EnumStatus} state [The state value]
     */
    constructor(hor: number, vert: number, state?: EnumStatus);
    /**
     * @description [updateStatus Update a box state]
     * @param {EnumStatus} state ][The update state}
     */
    updateStatus(state: EnumStatus): void;
    /**
     * @description [toString Informations about a MatriceCase object ]
     * @return {string} [MatriceCase informations]
     */
    toString(): string;
    hor: number;
    vert: number;
    state: EnumStatus;
}
