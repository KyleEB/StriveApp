import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.page.html',
  styleUrls: ['./achievements.page.scss'],
})
export class AchievementsPage implements OnInit {

  constructor(
    private theme: ThemeService,
    private alertCtrl: AlertController
  ) {
    this.theme.storedTheme;
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

}
