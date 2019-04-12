import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';
import { AlertController } from '@ionic/angular';
import { Storage } from'@ionic/storage';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.page.html',
  styleUrls: ['./achievements.page.scss'],
})
export class AchievementsPage implements OnInit {

  cards:any[];
  username: any;
  password: any;

  constructor(
    private theme: ThemeService,
    private alertCtrl: AlertController,
    private storage: Storage,
    private register: RegisterService,

  ) {
    this.theme.storedTheme;
    this.loadUser();
   }
  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Achievements',
      message: 'Here you can see your completed goals, good work!',
      buttons: ['OK']
    });
    await alert.present();
  }

  async loadUser(){
    await this.storage.get('user').then((user) => {
     console.log('your name is ' + user.fullname);
     console.log('your username is ' + user.username);
     this.username = user.username;
     this.password = user.password;
     this.cards=user.cards;
   });
 }

 
 async loadCards(){
  await this.storage.get('cards').then((cards) => {
    this.cards = cards;
  });
}

ionViewWillEnter() {
  this.loadCards();
}

deleteAch(card){
  card.achieved = "false";
  this.cardUpdate();
}

cardUpdate(){
  this.register.updateCards(this.username, this.password, this.cards).subscribe(async res => {
    console.log(res)

    if (res.error) {
      this.displayAlert('Card Update Error', res.error);
    }

    if (res.user) {
      this.storage.set('cards', this.cards);
    }
  });
}

async displayAlert(header, subheader) {
  const alert = await this.alertCtrl.create({
    header: header,
    subHeader: subheader,
    buttons: ['Dismiss']
  });
  return await alert.present();
}

}
