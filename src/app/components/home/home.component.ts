import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  width = window.innerWidth;
  blog = [
    { title: 'Centering', id: 0 },
    { title: 'Grid', id: 1 },
    { title: 'Grid Direction', id: 5 },
    { title: 'Media Queries', id: 2 },
    { title: 'IOS Search', id: 3 },
    { title: 'Zip', id: 4 },
    { title: 'TinyMCE', id: 6 },
  ];
  current = null;

  constructor() {}

  ngOnInit(): void {}

  showPost(id: string) {
    this.current = id;
  }
}
