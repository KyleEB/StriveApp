import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';

import { IonicModule, LoadingController, AlertController } from '@ionic/angular';

import { MainPage } from './main.page';
import { RegisterService } from '../services/register.service';
import { Storage } from '@ionic/storage';

const routes: Routes = [
  {
    path: '',
    component: MainPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainPage]
})
export class MainPageModule {
  username:any;
  constructor(public router: Router,
    private reg: RegisterService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private storage: Storage){
      this.loadUser();
    }

    async loadUser(){
      await this.storage.get('username').then((value) => {
        console.log('your name is ' + value);
        this.username = value; 
      });
      console.log('your username is ' + this.username);
      
    }
}
