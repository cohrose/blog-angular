import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styles: [],
})
export class ZipComponent implements OnInit {
  @Input() width: number;
  zip = `this.input.valueChanges
  .pipe(
    tap(x => (this.searchInput = x)),
    switchMap(() => {
      zip(
        this.search(this.searchInput), 
        this.searchName(this.searchInput)
      )
    }),
    // only continues after zip completes
    tap(() => (this.pending = false)),
  )
.subscribe()`;
  constructor() {}

  ngOnInit(): void {}
}
