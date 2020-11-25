import { Component, OnInit } from '@angular/core';
import { faEdit, faList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-list',
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.scss']
})
export class IconListComponent implements OnInit {

  public myIcon = faList;

  constructor() { }

  ngOnInit(): void {
  }

}
