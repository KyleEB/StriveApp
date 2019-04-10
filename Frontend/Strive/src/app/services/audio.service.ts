//code taken from joshmorony https://www.joshmorony.com/adding-sound-effects-to-an-ionic-application/
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

interface Sound {
  key: string;
  asset: string;
  isNative: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  public sounds: Sound[] = [];
  private audioPlayer: HTMLAudioElement = new Audio();
  private forceWebAudio: boolean = true;

  constructor(private platform: Platform, private nativeAudio: NativeAudio){

  }

  preload(key: string, asset: string): void {

    if(this.platform.is('cordova') && !this.forceWebAudio){

     this.nativeAudio.preloadSimple(key, asset);

      this.sounds.push({
        key: key,
        asset: asset,
        isNative: true
      });

    } else {

      let audio = new Audio();
      audio.src = asset;

      this.sounds.push({
        key: key,
        asset: asset,
        isNative: false
      });

    }

  }

  play(key: string): boolean {

    let soundToPlay = this.sounds.find((sound) => {
      return sound.key === key;
    });
    if (soundToPlay != null){
      if(soundToPlay.isNative){

        this.nativeAudio.play(soundToPlay.asset).then((res) => {
          console.log(res);
          return true;
        }, (err) => {
          console.log(err);
          return false;
        });

      } else {

        this.audioPlayer.src = soundToPlay.asset;
        this.audioPlayer.play();
        return true;
      }
    }
    else {
      return false;
    }

  }

}