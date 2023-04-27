import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiny-mce',
  templateUrl: './tiny-mce.component.html',
  styles: [],
})
export class TinyMceComponent implements OnInit {
  @Input() width: number;
  code = `import { TinyMCE } from 'src/assets/tinymce/js/tinymce/tinymce';
declare const tinymce: TinyMCE;
  
bodyLength: number = 0;
  
handleEvent(change: string): void {
  this.submission.body = change;
  this.bodyLength = tinymce.activeEditor.plugins.wordcount.body.getCharacterCount();
}`;

  html = `<mat-hint>{{ bodyLength }}/500</mat-hint>`;
  constructor() {}

  ngOnInit(): void {}
}
