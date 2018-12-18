import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BattleComponent } from "../battle/battle";
import { AuthenticationService, IGuild } from '../../services/authentication.service';
import { StorageService } from '../../services/storage.service';

/**
 * Generated class for the JoinTeamComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'join-team',
  templateUrl: 'join-team.html'
})
export class JoinTeamComponent implements OnInit {

  text: string;
  battleId: string;
  guilds: IGuild[];
  //teams: string[] = ["Dunkey", "Unraveller", "Knack2Baby!"];
  //members = [["Mario", "Knight"], ["Link", "Mage"], ["Kirby", "Cleric"], ["Samus", "Knight"]];

  constructor(public navCtrl: NavController, public navParams: NavParams, private _authSvc: AuthenticationService, private _storage:StorageService) {
    console.log('Hello JoinTeamComponent');
    this.text = 'Select a team you would like to join';
    this.battleId = navParams.get('battleId');
    console.log(this.battleId);
  }

  async ngOnInit()
  {
    this.guilds = await this._authSvc.GetGuildsFromBattle(this.battleId);
  }

  join(index:number){
    console.log("index:" + index);
    console.log("clicked on Join");

    var pBody = {
      id: this.currentPlayerId,
      guildId: result.id,
      isCreator: true}

    this._authSvc.putPlayerRequest()

    this.navCtrl.push(BattleComponent);
  }

}
