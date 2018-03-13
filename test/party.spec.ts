import { expect } from 'chai';
import {BattleUtils} from '../src/battleUtils';
import {BattleMatrice} from '../src/battleMatrice';
import {MatriceCase} from '../src/matriceCase';
import { EnumStatus } from "../src/enumStatus";
import { Ship } from "../src/ship";
import {Player} from '../src/player';
import {Party} from '../src/party';
import {Cruiser} from '../src/cruiser';
import {EnumOrientation} from "../src/enumOrientation";
import { AircraftCarrier } from '../src/aircraftCarrier';
import { Dictionary, Set }  from 'typescript-collections';
import * as Faker from 'faker';

describe('Party Tests', () => {

  var cruiserPosition: Dictionary<string,MatriceCase>;
  var minePosition: Dictionary<string,MatriceCase>;
  var name1 :string;
  var name2 :string;

  

  describe('Party Tests', () => {

    before(function(){

      //emplacement du cruiser
      cruiserPosition = new Dictionary<string,MatriceCase>(); 
      cruiserPosition.setValue(BattleUtils.generateKeyGridByVal(2,1),new MatriceCase(2,1));
      cruiserPosition.setValue(BattleUtils.generateKeyGridByVal(2,2),new MatriceCase(2,2));
      cruiserPosition.setValue(BattleUtils.generateKeyGridByVal(2,3),new MatriceCase(2,3));
      cruiserPosition.setValue(BattleUtils.generateKeyGridByVal(2,4),new MatriceCase(2,4));

      //emplacement de la mine
      minePosition = new Dictionary<string,MatriceCase>(); 
      minePosition.setValue(BattleUtils.generateKeyGridByVal(9,7),new MatriceCase(9,7));

      name1 = Faker.name.findName();
      name2 = Faker.name.findName();

    });

    it('should return a good party', () => {      

      //creation player
      let player1 :Player = new Player(name1);    
      let player2 :Player = new Player(name2);      

      //initialisation matrices de jeux
      let matricePlayer1 :BattleMatrice = new BattleMatrice();
      let matricePlayer2 :BattleMatrice = new BattleMatrice(10);


      //creations des navires
      let cruiserPlayer1 :Ship = new Cruiser(cruiserPosition,EnumOrientation.OR_VERTICAL);
      let minePlayer2 :Ship = new Cruiser(minePosition,EnumOrientation.OR_HORIZONTAL);

      //association des navires aux matrices de jeux
      matricePlayer1.addShip(cruiserPlayer1);
      matricePlayer2.addShip(minePlayer2);

      //association des matrices aux joueurs
      player1.grid = matricePlayer1;
      player1.targetGrid = matricePlayer2;

      player2.grid = matricePlayer2;
      player2.targetGrid = matricePlayer1;

      // initialisation de la partie
      // Une fois la party initialiséé avec les joueurs
      // tout doit se gérér avec les attributs/methodes de cette objet
      let party :Party = new Party(player1, player2);
      let hitResult :EnumStatus = party.hit(player1.uid,player2.uid,1,1);
      expect(EnumStatus.STATUS_FAIL).to.equal(hitResult);      
      let hit2Result :EnumStatus = party.hit(player2.uid,player1.uid,5,5);
      expect(EnumStatus.STATUS_FAIL).to.equal(hit2Result); 

      let hit3Result :EnumStatus = party.hit(player1.uid,player2.uid,9,7);
      expect(EnumStatus.STATUS_HIT).to.equal(hit3Result);      
      let hit4Result :EnumStatus = party.hit(player2.uid,player1.uid,2,2);
      expect(EnumStatus.STATUS_HIT).to.equal(hit4Result); 


    });

    

  });

});