import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { Item } from '../../service/data';

@Component({
  selector: 'app-listitem2',
  templateUrl: './listitem2.component.html',
  styleUrls: ['./listitem2.component.css']
})
export class ListItem2Component implements OnInit, OnDestroy {
  @Input() item: Item;
 
  constructor() { }

  ngOnInit(): void {
    
  }  

  ngOnDestroy(): void {
    // ???
  }
}
