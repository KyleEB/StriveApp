import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { RegisterService } from '../services/register.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { Storage } from 'ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username:string;
  password:string;

  constructor(public router: Router,
    private reg: RegisterService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private storage: Storage
    ){
  }

  async login(){
    await this.showLoading();
    if(this.username === undefined || this.password === undefined){
      this.loadingCtrl.dismiss();
      this.displayAlert('Login Failed', 'Empty Fields');
      return;
    }
    this.reg.loginUser(this.username, this.password).subscribe( res => 
      { 
        this.loadingCtrl.dismiss();
        if(res.user){
          this.storage.set('username', res.user.email);
          this.router.navigate(['/main']);
        }
      },
      err => {
        this.loadingCtrl.dismiss();
        this.displayAlert('Login Error', err.error);
      });
  }

  async showLoading(){
    const loading =  await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles',
      duration: 3000
    });

     return await loading.present();
  }

  async displayAlert(header, subheader){
    const alert = await this.alertCtrl.create({
      header: header,
      subHeader: subheader,
      buttons: ['Dismiss']
    });
    return await alert.present();
  }

  goRegister(){
    this.router.navigateByUrl('/register');
  }
}
