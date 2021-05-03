import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-headerlist',
  templateUrl: './headerlist.component.html',
  styleUrls: ['./headerlist.component.css']
})
export class HeaderListComponent implements OnInit, OnDestroy {
  @Input() title: string;
  
  constructor() { }

  ngOnInit(): void {
    
  }  

  ngOnDestroy(): void {
    // ???
  }
}
