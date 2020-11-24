import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {

  @Input() public label: string;
  @Input() public href: string;
  @Input() public route: string;
  @Input() public action: string;
  @Input() public typeButton: string = "button";
  @Input() public disabled: boolean = false;
  @Output() clicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public doAction() {
    this.clicked.emit();
  }
}
