import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';
import { AlertController } from '@ionic/angular';
import { SelectorMatcher } from '@angular/compiler';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.scss'],
})
export class GoalsPage implements OnInit {

  public cards = [{"name": "3 Bottles a Day", "goal": "false"},
                 {"name": "Drink Every Hour", "goal": "false"},
                 {"name": "Go to the Gym More", "goal": "false"},
                 {"name": "Jog More Often", "goal": "false"},
                 {"name": "Eat Healthier", "goal": "false"},
                {"name": "Eat Less", "goal": "false"}]

  constructor(
    private theme: ThemeService,
    private alertCtrl: AlertController
  ) {
    this.theme.storedTheme;
   }

  async drinkWater() {
    let alert = await this.alertCtrl.create({
      header: 'How would you like to improve water intake?',
      buttons: [
        {
          text: "3 Bottles a Day",
          handler: data => {
            this.cards[0].goal = "true";
          }
        },
        {
          text: "Drink Every Hour",
          handler: data => {
            this.cards[1].goal = "true";
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
          }
        },
        {
          text: "Jog More Often",
          handler: data => {
            this.cards[3].goal = "true";
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
          }
        },
        {
          text: "Eat Less",
          handler: data => {
            this.cards[5].goal = "true";
          }
        }
      ]
    });
    return await alert.present();
  }

  async popup(){
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
    return await alert.present();
  }

  ngOnInit() {

  }

}
