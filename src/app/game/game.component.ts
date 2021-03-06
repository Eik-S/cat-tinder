import { Component, Inject} from '@angular/core';
import {CatApiService} from '../services/cat-api.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  catsQueue: string[] = [];
  cloaked = true;

  constructor(
    @Inject(CatApiService) private catApiService: CatApiService
  ) {
    this.addCats(10);
  }

  addCats(amount: number): void {
    this.catApiService.getCats(10).subscribe( (response: object[]) => {
      response.forEach(catObject => this.catsQueue.unshift(catObject['url']));
    });
  }

  shiftCatsQueue(voteResult: string): void {
    if (this.catsQueue.length < 5) {
      this.addCats(10);
    }

    document.getElementsByClassName('active')[0].classList.add(voteResult);

    setTimeout(() => {
      this.catsQueue.splice(-1, 1);
    }, 200);

  }

  onImageLoad(): void {
    this.cloaked = false;
  }
}
