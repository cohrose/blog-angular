import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styles: [],
})
export class GridComponent implements OnInit {
  @Input() width: number;
  htmlcode = `<div class="grid">
  <div>Box One</div>
  <div>Box Two</div>
  <div>Box Three</div>
</div>`;
  csscode = `/* default */
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
}

/* large devices */
@media screen and (max-width: 1279px) {
    .grid {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
    }
}

/* medium devices */
@media screen and (max-width: 959px) {
    .grid {
        grid-template-columns: 1fr 1fr;
        gap: 15px;
    }
}

/* small devices */
@media screen and (max-width: 599px) {
    .grid {
        grid-template-columns: 1fr;
        gap: 10px;
    }
}
`;
  constructor() {}

  ngOnInit(): void {}
}
