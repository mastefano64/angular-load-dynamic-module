import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit, OnDestroy } from '@angular/core';

import { CompFirstComponent } from '../compfirst/compfirst.component';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit, OnDestroy {
  @ViewChild('container1', { read: ViewContainerRef, static: true }) vcr1;

  constructor(private cfr: ComponentFactoryResolver) { }

  ngOnInit(): void {
    const factory = this.cfr.resolveComponentFactory(CompFirstComponent);
    const compref = this.vcr1.createComponent(factory);
    const comp = <CompFirstComponent>compref.instance;
  }  

  ngOnDestroy(): void {
    // ???
  }
}
