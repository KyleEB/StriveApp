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

    userFullName: any;
    cards:any[];

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
       await this.storage.get('user').then((user) => {
        console.log('your name is ' + user.fullname);
        console.log('your username is ' + user.username);
        this.userFullName = user.fullname;
        this.cards = user.cards;
      });
      
      
    }

    ngOnInit() {
      this.loadCards();
    }

    async loadCards(){
      await this.storage.get('user').then((user) => {
        this.cards = user.cards;
      });
    }

}
