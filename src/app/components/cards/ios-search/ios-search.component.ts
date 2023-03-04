import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ios-search',
  templateUrl: './ios-search.component.html',
  styles: [],
})
export class IosSearchComponent implements OnInit {
  @Input() width: number;
  code = `<input 
  (keyup.enter)="search()" 
  (keyup.shift.enter)="search()" 
  type="text"
/>`;
  constructor() {}

  ngOnInit(): void {}
}
