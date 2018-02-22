import { expect } from 'chai';
import {BattleUtils} from '../src/battleUtils';
import {BattleMatrice} from '../src/battleMatrice';
import {MatriceCase} from '../src/matriceCase';
import { EnumStatus } from "../src/enumStatus";


describe('BattleMatrice Tests', () => {

	const _vert :string = "2";
	const _hor :string = "E";

  it('should return a size of 10', () => {
    let  bm :BattleMatrice =  new BattleMatrice(10, false);

    expect(10).to.equal(bm.getSize);
  });

  it('should change the status MatriceCase', () => {
    
    let  bm :BattleMatrice =  new BattleMatrice(10, false);   
    let val :MatriceCase = bm.getMatrice.getValue(_hor + "-" + _vert);

    expect(0).to.equal(val.state);

    let mc :MatriceCase =  new MatriceCase(5,2,EnumStatus.STATUS_HIT);  
	bm.updateMatrice(mc);

	expect(1).to.equal(bm.getMatrice.getValue(_hor + "-" + _vert).state);


  });

});