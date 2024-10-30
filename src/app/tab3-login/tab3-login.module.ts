import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../components/login/login.component';

import { IonicModule } from '@ionic/angular';

import { Tab3LoginPageRoutingModule } from './tab3-login-routing.module';

import { Tab3LoginPage } from './tab3-login.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    FormsModule,
    IonicModule,
    Tab3LoginPageRoutingModule
  ],
  declarations: [Tab3LoginPage, LoginComponent,]
})
export class Tab3LoginPageModule {}
export class LoginModule {}
