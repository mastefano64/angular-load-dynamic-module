import { Component, OnInit, OnDestroy } from '@angular/core';

import { DataService } from '../../service/data.service';
import { Item } from '../../service/data';

@Component({
  selector: 'app-compfeature1',
  templateUrl: './compfeature1.component.html',
  styleUrls: ['./compfeature1.component.css']
})
export class CompFeature1Component implements OnInit, OnDestroy {
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
