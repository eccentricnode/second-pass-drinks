import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const BASE_URL = `https://level-up-api-zderqmkwsj.now.sh`;

@Injectable({
  providedIn: 'root'
})
export class DrinksService {
  model = `drinks`;

  constructor(private http: HttpClient) { }

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.http.get<any>(this.getUrl())
      .pipe(map(res => res));
  }

  create(drink) {
    return this.http.post(this.getUrl(), drink);
  }

  update(drink) {
    return this.http.patch(this.getUrlForId(drink.id), drink);
  }

  delete(drinkId) {
    return this.http.delete(this.getUrlForId(drinkId));
  }
}
