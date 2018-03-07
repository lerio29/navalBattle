import { expect } from 'chai';
import {BattleUtils} from '../src/battleUtils';
import {BattleMatrice} from '../src/battleMatrice';
import {MatriceCase} from '../src/matriceCase';
import { EnumStatus } from "../src/enumStatus";
import {Player} from '../src/player';
import {Party} from '../src/party';
import {EnumOrientation} from "../src/enumOrientation";
import { AircraftCarrier } from '../src/aircraftCarrier';
import { Dictionary, Set }  from 'typescript-collections';
import * as Sinon from 'sinon';
import * as Mockito from 'ts-mockito';

describe('Party Tests', () => {



  beforeEach(function(){

  });

  describe('Party Tests', () => {

    it('should return a good party', () => {
      let player1 :Player = Mockito.mock(Player);
      expect("toto").to.equal(player1.name);
      

    });

    

  });

});