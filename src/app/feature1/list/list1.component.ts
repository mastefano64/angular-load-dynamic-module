import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { Item } from '../../service/data';

@Component({
  selector: 'app-list1',
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.css']
})
export class List1Component implements OnInit, OnDestroy {
  @Input() items: Item[];

  constructor() { }

  ngOnInit(): void {
   
  }  

  ngOnDestroy(): void {
    // ???
  }
}
