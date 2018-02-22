import { expect } from 'chai';
import {BattleUtils} from '../src/battleUtils';
import { EnumStatus } from "../src/enumStatus";



describe('BattleUtils Tests', () => {

  it('should return a good horizontal conversion', () => {
    let hor :string = BattleUtils.horizontalPositionToAlpha(1);

    expect("A").to.equal(hor);
  });

  it('should return a reverse vertical conversion', () => {
    let hor :number = BattleUtils.alphaToVerticalPosition("A");

    expect(1).to.equal(hor);
  });

  it('should return a key from values', () => {
    let val :string = BattleUtils.generateKeyGridByVal(5,2);

    expect("E-2").to.equal(val);
  });

});