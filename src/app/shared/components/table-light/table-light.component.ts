import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableLightComponent implements OnInit {

    @Input() headers: string[];

  // constructor(private changeDectectorRef: ChangeDetectorRef) { }
  constructor() { }

  ngOnInit(): void {
    // this.changeDectectorRef.detectChanges();
  }

  public check() {
    console.log("table-light refreshing ...");
  }
}
