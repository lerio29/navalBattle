"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Create a matrix box object
 * @class <p>A MatriceCase contains all information for a matrix box.</p>
 */
class MatriceCase {
    /**
     * [MatriceCase constructor]
     * @param {number}  hor [The horizontal value]
     * @param {number}  vert [The vertical value]
     * @param {EnumStatus} state [The state value]
     */
    constructor(hor, vert, state) {
        this.hor = hor;
        this.vert = vert;
        this.state = state;
    }
    /**
     * [updateStatus Update a box state]
     * @param {EnumStatus} state ][The update state}
     */
    updateStatus(state) {
        this.state = state;
    }
    /**
     * [toString Informations about a MatriceCase object ]
     * @return {string} [MatriceCase informations]
     */
    toString() {
        return "MatriceCase Infos, hor: " + this._hor + ", vert: " + this._vert + ", state: " + this._state;
    }
    get hor() {
        return this._hor;
    }
    get vert() {
        return this._vert;
    }
    get state() {
        return this._state;
    }
    set hor(val) {
        this._hor = val;
    }
    set vert(val) {
        this._vert = val;
    }
    set state(val) {
        this._state = val;
    }
}
exports.MatriceCase = MatriceCase;

//# sourceMappingURL=../maps/matriceCase.js.map
