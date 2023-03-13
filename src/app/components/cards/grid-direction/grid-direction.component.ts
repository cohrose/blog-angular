import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-direction',
  templateUrl: './grid-direction.component.html',
  styles: [],
})
export class GridDirectionComponent implements OnInit {
  @Input() width: number;
  css = `.grid {
  direction: rtl; /* right to left */
}`;
  constructor() {}

  ngOnInit(): void {}
}
