import { Component, OnInit } from '@angular/core';
import {GameData} from "../game-data";
import {ActivityService} from "../services/activity.service";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  gameData: GameData;
  playTime: number = 6000;

  constructor( private activityService: ActivityService) {
    this.activityService.gameData.subscribe( gameData => {
      this.gameData = gameData;
    })
  }

  ngOnInit(): void {
  }

}
