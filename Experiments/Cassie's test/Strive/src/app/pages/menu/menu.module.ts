import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { MenuRoutingModule } from './menu-routing.module';
import { MainPageModule } from '../main/main.module';
import { ProfilePageModule } from '../profile/profile.module';
import { HomePageModule } from 'src/app/home/home.module';
import { RegisterPageModule } from 'src/app/register/register.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuRoutingModule,
    ProfilePageModule,
    MainPageModule,
    HomePageModule,
    RegisterPageModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
