import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage'
import { RegisterService } from 'src/app/services/register.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.page.html',
  styleUrls: ['./subscribe.page.scss'],
})
export class SubscribePage implements OnInit {
  username:any;
  user:any;
  email:any;
  subscribed:any;

  constructor(
    public storage: Storage,
    private register: RegisterService,
    private alertCtrl: AlertController,
    public nav: NavController
  ) { }

  ngOnInit() {
    this.loadUser();
  }

  async loadUser(){
    await this.storage.get('user').then((user) => {
      console.log('your name is ' + user.fullname);
      console.log('your username is ' + user.username);
      this.username = user.username;
      this.user = user;
      this.email = user.email;
      this.subscribed = user.subscribed;
   });
  }

  subscribe(){
    this.subscribed=true;
    this.register.updateSubscribed(this.username, this.user.password, this.subscribed).subscribe(res => {
      console.log(res.user);
      if(res.user){
        this.storage.set('user', res.user);
      }
    },
    err => {
      this.displayAlert('Subscribe Error', err.error);
    });
    this.logout();
  }

  async logout(){
    let alert = await this.alertCtrl.create({
      header: 'Congratulations!',
      message: 'You are now subscribed! You will now be logged out, log in to view your new content',
      buttons: [
        {
          text: "ok",
          handler: data => {
            this.nav.navigateRoot("menu/(menucontent:home)");
          }
        }
      ]
    });

    await alert.present();   
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
