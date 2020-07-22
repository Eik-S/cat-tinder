import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivityService} from "../services/activity.service";
import {GameData} from "../game-data";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Output() voted = new EventEmitter<string>();

  gameData: GameData;

  constructor( private activityService: ActivityService) {
    this.activityService.gameData.subscribe( gameData => {
      this.gameData = gameData
    });
  }

  ngOnInit(): void {
  }

  likeTheCat(): void {
    this.gameData.likes += 1;
    this.voted.emit('like');
  }

  dislikeTheCat(): void {
    this.gameData.dislikes += 1;
    this.voted.emit('dislike')
  }

  skipTheCat(): void {
    this.gameData.skipped += 1;
    this.voted.emit('skip')
  }

}
