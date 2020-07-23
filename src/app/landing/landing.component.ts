import {Component, OnInit, ViewChild} from '@angular/core';
import {GameData} from "../game-data";
import {ActivityService} from "../services/activity.service";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  @ViewChild('timeInput') timeInputField;

  gameData: GameData;
  playTime: number = 60;

  constructor( private activityService: ActivityService) {
    this.activityService.gameData.subscribe( gameData => {
      this.gameData = gameData;
    })
  }

  startNewGame() {
    this.activityService.initNewGame(this.playTime);
  }

  validateInput() {
    if (this.playTime && this.playTime < 0) {
      this.timeInputField.control.setErrors({'negative': true});
    }
    if (this.playTime === 0) {
      this.timeInputField.control.setErrors({'zero': true});
    }
    if (this.playTime >= 1000) {
      this.timeInputField.control.setErrors({'max': true});
    }
  }


  ngOnInit(): void {
  }

}
