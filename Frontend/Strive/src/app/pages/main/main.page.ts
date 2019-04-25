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
    toBeQuote:any;
    imgURL:any;
    images = 
    [
      {"url": "../../../assets/quotePics/pic1.jpg"},
      {"url": "../../../assets/quotePics/pic2.jpg"},
      {"url": "../../../assets/quotePics/pic3.jpg"},
      {"url": "../../../assets/quotePics/pic4.jpg"},
      {"url": "../../../assets/quotePics/pic5.jpg"},

    ]
    quotes = 
    [
      {"quote": "The past cannot be changed. The future is yet in your power"},
      {"quote": "Change your life today. Don't gamble on the future, act now, without delay."},
      {"quote": "With the new day comes new strength and new thoughts"}
    ]

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

    generateImage(){
      this.imgURL = Math.floor(Math.random() * this.quotes.length);
      this.imgURL = this.images[this.imgURL].url;
    }

    generateQuote(){
      this.toBeQuote = Math.floor(Math.random() * this.quotes.length);
      this.toBeQuote = this.quotes[this.toBeQuote].quote;
    }

    ionViewWillEnter() {
      this.menu.enable(true);
      this.loadUser();
      this.loadCards();
      this.generateImage();
      this.generateQuote();
    }
}
