import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconMenuComponent } from './components/icon-menu/icon-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconUpdateComponent } from './components/icon-update/icon-update.component';
import { IconDeleteComponent } from './components/icon-delete/icon-delete.component';
import { IconListComponent } from './components/icon-list/icon-list.component';



@NgModule({
  declarations: [IconMenuComponent, IconUpdateComponent, IconDeleteComponent, IconListComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [IconMenuComponent, IconDeleteComponent, IconUpdateComponent, IconListComponent]
})
export class IconsModule { }
