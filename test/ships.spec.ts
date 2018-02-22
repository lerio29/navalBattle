import { expect } from 'chai';
import {BattleUtils} from '../src/battleUtils';
import {BattleMatrice} from '../src/battleMatrice';
import {MatriceCase} from '../src/matriceCase';
import { EnumStatus } from "../src/enumStatus";
import {EnumOrientation} from "../src/enumOrientation";
import { PorteAvion } from '../src/porteAvion';
import { Dictionary, Set }  from 'typescript-collections';

describe('Ships Tests', () => {



  beforeEach(function(){

  });

  describe('Porte Avion Tests', () => {

    it('should return a good start/end case', () => {

      //on créé une liste de cases
      let paPosition: Dictionary<string,MatriceCase> = new Dictionary<string,MatriceCase>(); 
      paPosition.setValue(BattleUtils.generateKeyGridByVal(1,1),new MatriceCase(1,1,EnumStatus.STATUS_EMPTY));
      paPosition.setValue(BattleUtils.generateKeyGridByVal(2,1),new MatriceCase(2,1,EnumStatus.STATUS_EMPTY));
      paPosition.setValue(BattleUtils.generateKeyGridByVal(3,1),new MatriceCase(3,1,EnumStatus.STATUS_EMPTY));
      paPosition.setValue(BattleUtils.generateKeyGridByVal(4,1),new MatriceCase(4,1,EnumStatus.STATUS_EMPTY));
      paPosition.setValue(BattleUtils.generateKeyGridByVal(5,1),new MatriceCase(5,1,EnumStatus.STATUS_EMPTY));


      let mctest :MatriceCase = new MatriceCase(1,1,EnumStatus.STATUS_EMPTY);
      console.log(mctest.toString());

      let porteAvion :PorteAvion = new PorteAvion(paPosition,EnumOrientation.OR_HORIZONTAL);
      let start :MatriceCase = porteAvion.calculStartCase();
      console.log("start : " + start.toString());
      let end :MatriceCase = porteAvion.calculEndCase();
      console.log("end : " + end.toString());
      expect(1).to.equal(start.hor);
      expect(5).to.equal(end.hor);
      expect(1).to.equal(start.vert);
      expect(1).to.equal(end.vert);

    });

    

  });

});