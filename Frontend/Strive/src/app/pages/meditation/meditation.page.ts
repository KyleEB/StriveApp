import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-meditation',
  templateUrl: './meditation.page.html',
  styleUrls: ['./meditation.page.scss'],
})
export class MeditationPage implements OnInit {

  constructor(
    private theme: ThemeService,
    private audio: AudioService
  ) {
    this.theme.storedTheme;
   }
  ngOnInit() {
  }

  ngAfterViewInit(){

    this.audio.preload('forestSounds', '../../../assets/meditation/forest.wav');

  }

  play(){
    this.audio.play('forestSounds');
  }

}
