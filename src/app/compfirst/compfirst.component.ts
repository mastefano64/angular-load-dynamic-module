import { Component, OnInit, OnDestroy } from '@angular/core';

import { DataService } from '../service/data.service';
import { Item } from '../service/data';

@Component({
  selector: 'app-compfirst',
  templateUrl: './compfirst.component.html',
  styleUrls: ['./compfirst.component.css']
})
export class CompFirstComponent implements OnInit, OnDestroy {
  items: Item[];
  
  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.getItems().subscribe(response =>
      this.items = response
    );
  }  

  ngOnDestroy(): void {
    // ???
  }
}
