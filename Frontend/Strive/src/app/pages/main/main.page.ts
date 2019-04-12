import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';
import { LoadingController, AlertController, MenuController, NavController } from '@ionic/angular';

import { Storage } from '@ionic/storage'
import { ThemeService } from 'src/app/theme.service';
import { Socket } from 'ngx-socket-io';

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
    private theme: ThemeService,
    private socket: Socket,
    private navCtrl: NavController){
      this.theme.storedTheme;
    }

    loadUser(){
        this.storage.get('user').then((user) => {
        console.log('your name is ' + user.fullname);
        console.log('your username is ' + user.username);
        this.userFullName = user.fullname;
        this.storage.set('cards', user.cards);
      });
    }

    //from devdactic also
    joinChat() {
      this.socket.connect();
      this.socket.emit('set-nickname', this.userFullName);
      this.navCtrl.navigateRoot("menu/(menucontent:chat)");
    }


     loadCards(){
        this.storage.get('cards').then((cards) => {
        this.cards = cards;
      });
    }

    ionViewWillEnter() {
      this.menu.enable(true);
      this.loadUser();
      this.loadCards();
    }

}
