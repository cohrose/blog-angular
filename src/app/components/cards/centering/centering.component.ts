import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-centering',
  templateUrl: './centering.component.html',
  styles: [],
})
export class CenteringComponent implements OnInit {
  @Input() width: number;
  flexverticalhorizontal = `.parent {
  display: flex;
  background: aqua;
  height: 200px;
  width: 200px;
  align-items: center;
  justify-content: center;
}
  
.child {
  background-color: yellow;
  height: 100px;
  width: 100px;
}`;

  html = `<div class="parent">
  <div class="child">This div is centered.</div>
</div>`;

  verticalhorizontal = `.parent {
  position: relative;
  background: aqua;
  height: 200px;
  width: 200px;
}

.child {
  position: absolute;
  background: yellow;
  height: 100px;
  width: 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`;

  vertically = `.parent {
  position: relative;
  background: aqua;
  height: 200px;
  width: 200px;
}

.child {
  position: absolute;
  background: yellow;
  height: 100px;
  width: 100px;
  top: 50%;
  transform: translate(0, -50%);
}`;

  margin = `.child {
  width: 50%;
  margin: auto;
}`;

  alignitems = `.center {
  display: flex;
  height: 150px;
  justify-content: center;
  align-items: center;
}`;

  justify = `.center {
  display: flex;
  justify-content: center;
}`;

  textalign = `.center { 
  text-align: center;
}`;
  constructor() {}

  ngOnInit(): void {}
}
