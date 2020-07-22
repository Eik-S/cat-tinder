import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatApiService {

  options: {
    responseType: 'json'
  }

  constructor(private http: HttpClient) {
  }

  getCats(amount: number): Observable<Object> {
    return this.http.get<object[]>(`https://api.thecatapi.com/v1/images/search?limit=${amount}`, this.options)
  }

}
