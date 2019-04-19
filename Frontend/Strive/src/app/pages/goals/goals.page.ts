import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';
import { AlertController } from '@ionic/angular';
import { SelectorMatcher } from '@angular/compiler';
import { RegisterService } from '../../services/register.service';
import { registerContentQuery } from '@angular/core/src/render3';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.scss'],
})
export class GoalsPage {

  public cards = [{"name": "3 Bottles a Day", "goal": "false", "desc": "How many bottles have you drank today?  Check them as you go!", "achieved": "false"},
                 {"name": "Drink Every Hour", "goal": "false", "desc": "Have you drank every hour today?"},
                 {"name": "Go to the Gym More", "goal": "false", "desc": "Have you gone to the gym today? Check off each day you go this week!", "achieved": "false"},
                 {"name": "Jog More Often", "goal": "false", "desc": "Have you jogged today? Check off each day you go this week!", "achieved": "false"},
                 {"name": "Eat Healthier", "goal": "false", "desc": "Remember to make good health choices! Are you happy with what you ate today?", "achieved": "false"},
                 {"name": "Eat Less", "goal": "false", "desc": "Eat less food more, but more times a day! Are you happy with your meal sizes today?", "achieved": "false"}
]

  private cardTemplate = [{"name": "3 Bottles a Day", "goal": "false", "desc": "How many bottles have you drank today?  Check them as you go!"},
   {"name": "Drink Every Hour", "goal": "false", "desc": "Have you drank every hour today?"},
  {"name": "Go to the Gym More", "goal": "false", "desc": "Have you gone to the gym today? Check off each day you go this week!"},
  {"name": "Jog More Often", "goal": "false", "desc": "Have you jogged today? Check off each day you go this week!"},
  {"name": "Eat Healthier", "goal": "false", "desc": "Remember to make good health choices! Are you happy with what you ate today?"},
  {"name": "Eat Less", "goal": "false", "desc": "Eat less food more, but more times a day! Are you happy with your meal sizes today?"},
  {"name": "", "goal": "false", "desc": ""}];

  public bottles = [{"bottlenum": 1, "checked":"false"},
                    {"bottlenum": 2, "checked": "false"},
                    {"bottlenum": 3, "checked": "false"}];

  public jogDays = [{"day": "M", "checked": "false"},
                {"day": "T", "checked": "false"},
                {"day": "W", "checked": "false"},
                {"day": "Th", "checked": "false"},
                {"day": "F", "checked": "false"},
                {"day": "Sa", "checked": "false"},
                {"day": "Su", "checked": "false"}];

  public gymDays = [{"day": "M", "checked": "false"},
  {"day": "T", "checked": "false"},
  {"day": "W", "checked": "false"},
  {"day": "Th", "checked": "false"},
  {"day": "F", "checked": "false"},
  {"day": "Sa", "checked": "false"},
  {"day": "Su", "checked": "false"}];

  username: any;
  password: any;
  user: any;

  constructor(
    private theme: ThemeService,
    private alertCtrl: AlertController,
    private register: RegisterService,
    private storage: Storage,
  ) {
    this.theme.storedTheme;
    this.loadUser();
  }

  async drinkWater() {
    let alert = await this.alertCtrl.create({
      header: 'How would you like to improve water intake?',
      buttons: [
        {
          text: "3 Bottles a Day",
          handler: data => {
            this.cards[0].goal = "true";
            this.cardUpdate();
          }
        },
        {
          text: "Drink Every Hour",
          handler: data => {
            this.cards[1].goal = "true";
            this.cardUpdate();
          }
        }
      ]
    });
    return await alert.present();
  }

  async exercise() {
    let alert = await this.alertCtrl.create({
      header: 'What exercise goals do you have?',
      buttons: [
        {
          text: "Go to the Gym More",
          handler: data => {
            this.cards[2].goal = "true";
            this.cardUpdate();
          }
        },
        {
          text: "Jog More Often",
          handler: data => {
            this.cards[3].goal = "true";
            this.cardUpdate();
          }
        }
      ]
    });
    return await alert.present();
  }

  async diet() {
    let alert = await this.alertCtrl.create({
      header: 'What exercise goals do you have?',
      buttons: [
        {
          text: "Eat Healthier",
          handler: data => {
            this.cards[4].goal = "true";
            this.cardUpdate();
          }
        },
        {
          text: "Eat Less",
          handler: data => {
            this.cards[5].goal = "true";
            this.cardUpdate();
          }
        }
      ]
    });
    
    return await alert.present();
  }

  async popup() {

    let alert = await this.alertCtrl.create({
      header: 'Choose Goals!',
      cssClass: 'custom',
      buttons: [
        {
          text: "Drink More Water",
          handler: data => {
            this.drinkWater();
          }
        },
        {
          text: "Exercise More",
          handler: data => {
            this.exercise();
          }
        },
        {
          text: "Eat Better",
          handler: data => {
            this.diet();
          }
        }
      ]
    });

    await alert.present();
      

  }

  async cardUpdate(){
    await this.storage.set('cards', this.cards);
    this.register.updateCards(this.username, this.password, this.cards).subscribe(async res => {
      console.log(res)

      if (res.error) {
        this.displayAlert('Card Update Error', res.error);
      }
      this.user.cards = this.cards;
       await this.storage.set('user', this.user);
        
    });
  }

   loadUser() {
      this.storage.get('user').then((user) => {
      console.log('your name is ' + user.fullname);
      console.log('your username is ' + user.username);
      this.username = user.username;
      this.password = user.password;
      this.user = user;
      this.cards = user.cards;
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

  deleteCard(card){
    card.goal = "false";
    this.cardUpdate();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Goals',
      message: 'Here you can see your current goals and set new ones!',
      buttons: ['OK']
    });
    await alert.present();
  }

  ionViewWillEnter(){
    this.loadUser();
  }

  ionViewWillLeave(){
    this.cardUpdate();
  }

  bottleCheck(card, bottle){
    console.log(card);
    bottle.checked = "true";
    let num: any = 0;
    for(num;num < 3; num++){
      if(this.bottles[num].checked === "false"){
        return;
      }
    }
    this.congratulate(card);
  }

  dayCheck(card, day){
    day.checked = "true";
    let num: any = 0;
    for(num;num < 7; num++){
      if(this.jogDays[num].checked === "false" && card.name === "Jog More Often"){
        return;
      }
      if(this.gymDays[num].checked === "false" && card.name === "Go to the Gym More"){
        return;
      }
    }
    this.congratulate(card);
  }

  async congratulate(card) {
    card.goal = "false";
    card.achieved = "true";
    this.cardUpdate();
    const alert = await this.alertCtrl.create({
      header: 'Congratulations',
      message: 'You earned an achievement! Go check it out in the achievements tab',
      buttons: ['OK']
    });
    await alert.present();
  }
}
