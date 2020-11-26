import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PageRegisterComponent } from './pages/page-register/page-register.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { TemplatesModule } from '../templates/templates.module';


@NgModule({
  declarations: [PageLoginComponent, PageRegisterComponent, FormRegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TemplatesModule,
    LoginRoutingModule,
    SharedModule
  ]
})
export class LoginModule { }
