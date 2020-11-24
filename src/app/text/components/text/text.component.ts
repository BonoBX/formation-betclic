import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
