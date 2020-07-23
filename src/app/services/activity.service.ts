import { Injectable } from '@angular/core';
import {BehaviorSubject, ReplaySubject} from "rxjs";

import { GameData } from "../game-data";

@Injectable({
  providedIn: 'root'
})

export class ActivityService {

  gameRunning = new BehaviorSubject(false);
  gameData = new BehaviorSubject<GameData>(undefined);
  timeLeft = new BehaviorSubject<number>(undefined);

  constructor() {
  }

  initNewGame(roundTime: number) {
    console.log("new game initialized");
    this.gameData = new BehaviorSubject({
      likes: 0,
      dislikes: 0,
      skipped: 0
    });

    this.gameRunning.next(true);
    this.timeLeft.next(roundTime);

    let timer = setInterval(() => {
      this.timeLeft.next(this.timeLeft.getValue() - 1);
    }, 1000);

    // starts the timer and stops the game after the given time
    setTimeout(() => {
      clearInterval(timer);
      this.gameRunning.next(false);
    }, roundTime * 1000);
  }

}
