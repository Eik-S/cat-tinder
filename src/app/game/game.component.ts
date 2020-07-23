import {ApplicationRef, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {CatApiService} from "../services/cat-api.service";
import {timeout} from "rxjs/operators";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  catsQueue: string[] = [];
  cloaked: boolean = true;

  constructor( private catApiService: CatApiService, private ref: ChangeDetectorRef) {
    this.addCats(10);
  }

  addCats(amount: number) {
    this.catApiService.getCats(10).subscribe( (response: object[]) => {
      response.forEach(catObject => this.catsQueue.unshift(catObject['url']));
      console.log(`Cats queue contains ${this.catsQueue.length} cats after being updated.`)
    })
  }

  shiftCat(voteResult: string) {
    if (this.catsQueue.length < 5) {
      this.addCats(10);
    }

    document.getElementsByClassName('active')[0].classList.add(voteResult);

    setTimeout(() => {
      this.catsQueue.splice(-1,1);
    }, 200)

  }

  onImageLoad() {
    console.log("onImageLoad emitted");
    this.cloaked = false;
  }

  ngOnInit(): void {
  }

}
