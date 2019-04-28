import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { ThemeService } from '../../theme.service';
import { RegisterService } from '../../services/register.service'

import { Storage } from '@ionic/storage'

const themes = {
  warm: {
    primary: '#F78154',
    secondary: '#4D9078',
    tertiary: '#B4436C',
    light: '#FDE8DF',
    medium: '#FCD0A2',
    dark: '#34162A'
  },
  night: {
    primary: '#8CBA80',
    secondary: '#FCFF6C',
    tertiary: '#FE5F55',
    medium: '#BCC2C7',
    dark: '#F7F7FF',
    light: '#495867'
  },
  neon: {
    primary: '#39BFBD',
    secondary: '#4CE0B3',
    tertiary: '#FF5E79',
    light: '#F4EDF2',
    medium: '#B682A5',
    dark: '#34162A'
  },
  default: {
    primary: '#3880ff',
    secondary: '#0cd1e8',
    tertiary: '#7044ff',
    success: '#10dc60',
    warning: '#ffce00',
    danger: '#f04141',
    dark: '#222428',
    medium: '#989aa2',
    light: '#f4f5f8'
  }
};

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  subColor:string="primary";
  subscribeStatus:string="Subscribe"
  subscribed:boolean=false;
  username: any;
  email: any;
  password: any;
  

  constructor(
    public nav: NavController,
    private theme: ThemeService,
    public storage: Storage,
    private register: RegisterService,
    private alertCtrl: AlertController
  ) {}

  changeTheme(name) {
    this.theme.setTheme(themes[name]);
  }

  ngOnInit() {
      this.loadUser();
  }

  subscribeStatusChange(){
    if(this.subscribed==false)
    {
      this.subscribed=true;
      this.subscribeStatus="You are Subscribed!"
    } else {
      this.subscribed=false;
      this.subscribeStatus="Subscribe"
    }
    this.register.updateSubscribed(this.username, this.password, this.subscribed).subscribe(res => {
      console.log(res.user);
      if(res.user){
        this.storage.set('user', res.user);
      }
    },
    err => {
      this.displayAlert('Subscribe Error', err.error);
    });
  }

  changeColor(){
    if(this.subColor=="primary")
    {
      this.subColor="secondary";
    } else {
      this.subColor="primary";
    }
  }

  logout(){
    this.changeTheme('default')
    this.nav.navigateRoot("menu/(menucontent:home)");
  }

  async loadUser(){
    await this.storage.get('user').then((user) => {
      console.log('your name is ' + user.fullname);
      console.log('your username is ' + user.username);
      this.username = user.username;
     this.email = user.email;
   });
  }

  changePassword(){
    this.register.changePasswordUser(this.username, this.password).subscribe(res =>
    { 
      console.log(res.user);
      if(res.user){
        this.storage.set('user', res.user);
      }
    },
    err => {
      this.displayAlert('Login Error', err.error);
    });
  }

  async displayAlert(header, subheader){
    const alert = await this.alertCtrl.create({
      header: header,
      subHeader: subheader,
      buttons: ['Dismiss']
    });
    return await alert.present();
  }

}