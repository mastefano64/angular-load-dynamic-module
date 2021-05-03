import { Component, Type, OnInit, OnDestroy } from '@angular/core';

import { CompFeature2Component } from '../feature2/compfeature/compfeature2.component';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit, OnDestroy {
  compfeature: Type<CompFeature2Component>;
  
  constructor(private service: DataService) { }

  ngOnInit(): void {
    
  }  

  async load() {
    const module = await import('../feature2/feature2.module');
    this.compfeature = (await module.FeatureModule).components.home;
  }  

  ngOnDestroy(): void {
    // ???
  }
}
