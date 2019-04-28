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
      {"url": "../../../assets/quotePics/pic6.jpg"},
      {"url": "../../../assets/quotePics/pic7.jpg"},
      {"url": "../../../assets/quotePics/pic8.jpg"},
      {"url": "../../../assets/quotePics/pic9.jpg"},
      {"url": "../../../assets/quotePics/pic10.jpg"}

    ]
    quotes = 
    [
      {"quote": "The past cannot be changed. The future is yet in your power"},
      {"quote": "Change your life today. Don't gamble on the future, act now, without delay."},
      {"quote": "With the new day comes new strength and new thoughts"},
      {"quote": "It does not matter how slowly you go as long as you do not stop."},
      {"quote": "Failure will never overtake me if my determination to succeed is strong enough"},
      {"quote": "Optimisim is the faith that leads to achievement. Nothing can be done without hope and confidence."},
      {"quote": "Life is 10% what happens to you and 90% how you react to is."},
      {"quote": "Only I can change my life. No one can do it for me."},
      {"quote": "Good, better, best. Never let it rest. 'Til your good is better and your better is best"},
      {"quote": "Without a plan you're going to stay where you are. It's time to make a move."},
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

    navigateGoals(){
      this.navCtrl.navigateRoot("menu/(menucontent:goals)");
    }

    navigateAchievements(){
      this.navCtrl.navigateRoot("menu/(menucontent:achievements)");
    }

    navigateProfile(){
      this.navCtrl.navigateRoot("menu/(menucontent:profile)");
    }


    ionViewWillEnter() {
      this.menu.enable(true);
      this.loadUser();
      this.loadCards();
      this.generateImage();
      this.generateQuote();
    }
}
