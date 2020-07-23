import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {ActivityService} from "../../services/activity.service";
import {GameData} from "../../game-data";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Output() voted = new EventEmitter<string>();

  // allows the arrowkeys to control the game
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === "ArrowLeft") {
      this.dislikeTheCat();
    }
    if (event.key === "ArrowRight") {
      this.likeTheCat();
    }
    if (event.key === "ArrowUp") {
      this.skipTheCat();
    }
  }

  gameData: GameData;
  transitioning: boolean;

  constructor( private activityService: ActivityService) {
    this.activityService.gameData.subscribe( gameData => {
      this.gameData = gameData
    });
  }

  ngOnInit(): void {
  }

  // blocks clicks if the last image is still transitioning
  // (prevents spamming)
  startTransitionTimeout() {
    this.transitioning = true;
    setTimeout(() => this.transitioning = false, 200);
  }

  likeTheCat(): void {
    if (this.transitioning) return;
    this.startTransitionTimeout();

    this.gameData.likes += 1;
    this.voted.emit('like');
  }

  dislikeTheCat(): void {
    if (this.transitioning) return;
    this.startTransitionTimeout();

    this.gameData.dislikes += 1;
    this.voted.emit('dislike')
  }

  skipTheCat(): void {
    if (this.transitioning) return;
    this.startTransitionTimeout();

    this.gameData.skipped += 1;
    this.voted.emit('skip')
  }

}
