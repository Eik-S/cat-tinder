import {ApplicationRef, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {CatApiService} from "../services/cat-api.service";
import {timeout} from "rxjs/operators";

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {

  catsQueue: string[] = [];

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

  ngOnInit(): void {
  }

}
