import {Component, Inject} from '@angular/core';
import {ActivityService} from '../../services/activity.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {

  timeLeft: number;

  constructor(
    @Inject(ActivityService) private activityService: ActivityService
  ) {
    this.activityService.timeLeft.subscribe( timeLeft => this.timeLeft = timeLeft);
   }
}
