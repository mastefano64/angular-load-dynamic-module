import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { Item } from '../../service/data';

@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.css']
})
export class List2Component implements OnInit, OnDestroy {
  @Input() items: Item[];

  constructor() { }

  ngOnInit(): void {
   
  }  

  ngOnDestroy(): void {
    // ???
  }
}
