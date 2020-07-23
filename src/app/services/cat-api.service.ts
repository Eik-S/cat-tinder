import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class CatApiService {

  options: object = {
    responseType: 'json'
  };

  constructor(private http: HttpClient) {
  }

  getCats(amount: number): Observable<object> {
    return this.http.get<object[]>(`https://api.thecatapi.com/v1/images/search?limit=${amount}`, this.options);
  }

}
