import { Component } from '@angular/core';

import { ActivityService } from "./services/activity.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cat-tinder';

  gameRunning: boolean;

  constructor( private activityService: ActivityService) {
    this.activityService.gameRunning.subscribe((gameRunning) => {
      this.gameRunning = gameRunning;
    });
  }
}
