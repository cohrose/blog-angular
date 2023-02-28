import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-queries',
  templateUrl: './media-queries.component.html',
  styles: [],
})
export class MediaQueriesComponent implements OnInit {
  @Input() width: number;
  code = `/* small devices */
@media screen and (max-width: 599px) {}

/* medium devices */
@media screen and (max-width: 959px) {}

/* large devices */
@media screen and (max-width: 1279px) {}`;
  constructor() {}

  ngOnInit(): void {}
}
