import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { Item } from '../../service/data';

@Component({
  selector: 'app-listitem1',
  templateUrl: './listitem1.component.html',
  styleUrls: ['./listitem1.component.css']
})
export class ListItem1Component implements OnInit, OnDestroy {
  @Input() item: Item;
 
  constructor() { }

  ngOnInit(): void {
    
  }  

  ngOnDestroy(): void {
    // ???
  }
}
