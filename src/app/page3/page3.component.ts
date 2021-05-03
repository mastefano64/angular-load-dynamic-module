import { Component, Type, OnInit, OnDestroy } from '@angular/core';

import { CompFeature1Component } from '../feature1/compfeature/compfeature1.component';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit, OnDestroy {
  compfeature: Type<CompFeature1Component>;
  
  constructor(private service: DataService) { }

  ngOnInit(): void {
    
  }  

  load(): void {
    import('../feature1/feature1.module')
      .then(m => m.FeatureModule).then(lazymodule => 
        this.compfeature = lazymodule.components.home
      )
  }  

  ngOnDestroy(): void {
    // ???
  }
}
