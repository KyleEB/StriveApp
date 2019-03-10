import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';
import { AudioService } from '../../services/audio.service';
import { AlertController } from '@ionic/angular'
@Component({
  selector: 'app-meditation',
  templateUrl: './meditation.page.html',
  styleUrls: ['./meditation.page.scss'],
})
export class MeditationPage implements OnInit {
  playing:boolean = false;

  constructor(
    private theme: ThemeService,
    private audio: AudioService,
    public alertCtrl: AlertController
  ) {
    this.theme.storedTheme;
   }

   async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Meditation',
      message: 'Press the Breathe button to begin your meditation experience. Close your eyes and let your mind wander',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
  }

  ngAfterViewInit(){

    this.audio.preload('forestSounds', '../../../assets/meditation/forest.wav');
    this.audio.preload('silence', '../../../assets/meditation/silence.wav');

  }

  play(){
    if(this.playing == false)
    {
      this.audio.play('forestSounds');
      this.playing = true;
    } else {
      this.audio.play('silence');
      this.playing = false;
    }
    
  }

}
