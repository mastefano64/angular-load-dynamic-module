import { Component, OnInit, OnDestroy } from '@angular/core';

import { CompFirstComponent } from '../compfirst/compfirst.component';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit, OnDestroy {
  compfirst = CompFirstComponent;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    // ???
  }
}
