import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconMenuComponent } from './components/icon-menu/icon-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconUpdateComponent } from './components/icon-update/icon-update.component';
import { IconDeleteComponent } from './components/icon-delete/icon-delete.component';



@NgModule({
  declarations: [IconMenuComponent, IconUpdateComponent, IconDeleteComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [IconMenuComponent, IconDeleteComponent, IconUpdateComponent]
})
export class IconsModule { }
