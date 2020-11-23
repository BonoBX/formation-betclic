import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconMenuComponent } from './components/icon-menu/icon-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [IconMenuComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [IconMenuComponent]
})
export class IconsModule { }
