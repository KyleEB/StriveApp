import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';
import { LoadingController, AlertController, MenuController } from '@ionic/angular';

import { Storage } from '@ionic/storage'
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage {

    username: any;

    constructor(public router: Router,
    private reg: RegisterService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private storage: Storage,
    private menu: MenuController,
    private theme: ThemeService){
      this.loadUser();
      this.theme.storedTheme;
    }

    async loadUser(){
       await this.storage.get('username').then((value) => {
        console.log('your name is ' + value);
        this.username = value; 
      });
      console.log('your username is ' + this.username);
      
    }

}
