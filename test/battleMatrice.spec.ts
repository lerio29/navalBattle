import { expect } from 'chai';
import {BattleMatrice} from '../src/battleMatrice';

// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';
describe('BattleMatrice', () => {

  it('should return a size of 10', () => {
    let  bm :BattleMatrice =  new BattleMatrice(10);

    expect(10).to.equal(bm.getSize);
  });

});