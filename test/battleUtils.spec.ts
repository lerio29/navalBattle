import { expect } from 'chai';
import {BattleUtils} from '../src/battleUtils';
import { EnumStatus } from "../src/enumStatus";
// import {JsonConfig, ShipsConfig} from "../src/jsonConfig";
import { BattleMatrice } from '../src/battleMatrice';
import { MatriceCase } from '../src/matriceCase';



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

  it('should return a matrice box from autoInstallShip method ', () => {
    let box :MatriceCase = BattleUtils.autoInstallShip(10);
    expect(box.hor).to.be.not.null;
    expect(box.vert).to.be.not.null;

   



  });

  // it('should return a good object from config1.json', () => {
  //   let size :number = BattleUtils.getMetaGridSize();   
  //   expect(10).to.equal(size);
  // });

});