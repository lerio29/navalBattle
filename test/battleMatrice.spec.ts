import { expect } from 'chai';
import { Dictionary, Set }  from 'typescript-collections';

import { BattleUtils } from '../src/battleUtils';
import { BattleMatrice } from '../src/battleMatrice';
import { MatriceCase } from '../src/matriceCase';
import { EnumStatus } from "../src/enumStatus";
import { EnumOrientation } from "../src/enumOrientation";
import { Ship } from "../src/ship";
import { Submarine } from "../src/submarine";
import { Mine } from "../src/mine";






describe('BattleMatrice Tests', () => {

	const _vert :string = "2";
	const _hor :string = "E";

  it('should return a size of 10', () => {
    let  bm :BattleMatrice =  new BattleMatrice(10);

    expect(10).to.equal(bm.getSize);
  });

  it('should change the status MatriceCase', () => {
    
    let  bm :BattleMatrice =  new BattleMatrice();   
    let val :MatriceCase = bm.getMatrice.getValue(_hor + "-" + _vert);

    expect("E").to.equal(val.state);

    let mc :MatriceCase =  new MatriceCase(5,2,EnumStatus.STATUS_HIT);  
	  bm.updateMatrice(mc);

	  expect("H").to.equal(bm.getMatrice.getValue(_hor + "-" + _vert).state);


  });

  it('should add correctly a ship', () => {
    let  bm :BattleMatrice = new BattleMatrice(10);

    let smPosition: Dictionary<string,MatriceCase> = new Dictionary<string,MatriceCase>(); 
    smPosition.setValue(BattleUtils.generateKeyGridByVal(1,1),new MatriceCase(1,1));
    smPosition.setValue(BattleUtils.generateKeyGridByVal(1,2),new MatriceCase(1,2));
    smPosition.setValue(BattleUtils.generateKeyGridByVal(1,3),new MatriceCase(1,3));


    let sm :Ship = new Submarine(smPosition, EnumOrientation.OR_HORIZONTAL);
    bm.addShip(sm);
    expect(10).to.equal(bm.getSize);
    expect("Sous-marin").to.equal(bm.getShips.toArray()[0].shipName);
    expect(3).to.equal(bm.getShips.toArray()[0].shipSize);

    
  });

  it('should return a hash sha1', () => {
    let  bm :BattleMatrice =  new BattleMatrice(10);    
    expect(bm.getIdHash).not.null;
  });


  

});