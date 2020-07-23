import {Component} from '@angular/core';
import {ActivityService} from "../../services/activity.service";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {

  timeLeft: number;

  constructor( private activityService: ActivityService) {
    this.activityService.timeLeft.subscribe( timeLeft => this.timeLeft = timeLeft);
   }
}
