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

  constructor(
    private theme: ThemeService,
    private alertCtrl: AlertController
  ) {
    this.theme.storedTheme;
   }

  async popup(){
    let alert = await this.alertCtrl.create({
      header: 'Choose Goals!',
      buttons: [
        {
          text: "Drink More Water",
        },
        {
          text: "Exercise More"
        },
        {
          text: "Eat Better"
        }
      ]
    });
    return await alert.present();
  }

  ngOnInit() {

  }

}
