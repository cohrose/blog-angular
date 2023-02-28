import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ios-search",
  templateUrl: "./ios-search.component.html",
  styles: [],
})
export class IosSearchComponent implements OnInit {
  code = `<input 
  (keyup.enter)='search()' 
  (keyup.shift.enter)='search()' 
  type="text"
/>`;
  constructor() {}

  ngOnInit(): void {}
}
