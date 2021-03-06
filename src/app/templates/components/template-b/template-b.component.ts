import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-b',
  templateUrl: './template-b.component.html',
  styleUrls: ['./template-b.component.scss']
})
export class TemplateBComponent implements OnInit {

  @Input() public title: string;
  @Input() public subtitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
