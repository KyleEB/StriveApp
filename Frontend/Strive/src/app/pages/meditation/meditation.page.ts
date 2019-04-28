import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';
import { AudioService } from '../../services/audio.service';
import { AlertController, NavController } from '@ionic/angular'
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-meditation',
  templateUrl: './meditation.page.html',
  styleUrls: ['./meditation.page.scss'],
})
export class MeditationPage implements OnInit {
  playing:boolean = false;
  chosenPic:string = "";
  picDesc:string = "";
  subscribed:any;

  constructor(
    private theme: ThemeService,
    private audio: AudioService,
    public alertCtrl: AlertController,
    public storage: Storage,
    public nav: NavController
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

  async choosePic() {
    const alert = await this.alertCtrl.create({
      header: 'Choose Your Destination',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Forest',
          handler: data => {
            this.chosenPic = '../../../assets/meditation/forest.jpg';
            this.audio.preload('forestSounds', '../../../assets/meditation/forest.wav');
            this.picDesc = "forest";
          }
        },
        {
          text: 'Ocean',
          handler: data => {
            this.chosenPic = '../../../assets/meditation/beach.jpg';
            this.audio.preload('oceanSounds', '../../../assets/meditation/ocean.wav');
            this.picDesc = "ocean";
          }
        }
      ],
    });
    return await alert.present();
  }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    this.audio.preload('silence', '../../../assets/meditation/silence.flac');

  }

  ionViewWillEnter(){
    this.checkSubscribe();
  }

  async checkSubscribe(){
    await this.storage.get('user').then((user) => {
      console.log('your name is ' + user.fullname);
      console.log('your username is ' + user.username);
      if(user.subscribed==false){
        this.nav.navigateRoot("menu/(menucontent:subscribe)");
      } else {
        this.choosePic();
      }
    });
  }

  play(){
    if(this.playing == false)
    {
      if(this.picDesc == "forest")
      {
        this.audio.play('forestSounds');
      } else {
        this.audio.play('oceanSounds');
      }
      this.playing = true;
    } else {
      this.audio.play('silence');
      this.playing = false;
    }
    
  }

}
