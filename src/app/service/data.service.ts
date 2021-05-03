import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Item } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private items = [];

  constructor() { 
    this.items = this.createItems();
  }

  getItems(): Observable<Item[]> {
    return of(this.items);
  }  

  createItems(): Item[] {
    const result: Item[] = [];

    for (let i = 0; i < 500; i++) {
      const item = new Item();
      item.id = i;
      item.title = 'title' + i;
      item.content = 'content' + i;
      item.image = 'image' + i;
      result.push(item);
    }

    return result;
  }  
}
