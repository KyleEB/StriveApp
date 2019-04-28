import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service'
import { AlertController, NavController } from '@ionic/angular';
import { ThemeService } from 'src/app/theme.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.page.html',
  styleUrls: ['./userlist.page.scss'],
})
export class UserlistPage  {
  username: any;
  user: any;
  email: any;
  subscribed: any;
  admin: boolean;
  allUsers: any; //this.allUsers is an array of users

  constructor(public nav: NavController,
    private theme: ThemeService,
    private register: RegisterService,
    private storage: Storage,
    private alertCtrl: AlertController) { }

    ionViewWillEnter(){
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
        if(user.admin){
          console.log(user.admin) 
          this.admin = true;
         } else { 
          this.admin = false; 
        }
     });

     this.register.getAllUsers(this.username, this.user.password).subscribe(res => {
      console.log(res);
      if(res){
        this.allUsers = res; //this.allUsers is an array of users
      }
    },
    err => {
      this.displayAlert('Getting All Users Error', err.error);
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
