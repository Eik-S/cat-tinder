import {Component, Inject, ViewChild} from '@angular/core';
import {GameData} from '../game-data';
import {ActivityService} from '../services/activity.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  @ViewChild('timeInput') timeInputField;

  gameData: GameData;
  playTime = 60;

  constructor(
    @Inject(ActivityService) private activityService: ActivityService
  ) {
    this.activityService.gameData.subscribe( gameData => {
      this.gameData = gameData;
    });
  }

  startNewGame(): void {
    this.activityService.initNewGame(this.playTime);
  }

  validateInput(): void {
    if (this.playTime && this.playTime < 0) {
      this.timeInputField.control.setErrors({negative: true});
    }
    if (this.playTime === 0) {
      this.timeInputField.control.setErrors({zero: true});
    }
    if (this.playTime >= 1000) {
      this.timeInputField.control.setErrors({max: true});
    }
  }
}
