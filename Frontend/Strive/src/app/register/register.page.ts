import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './../services/register.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage{

  username:string = '';
  password:string = '';
  repassword:string = '';

  constructor(
    public router: Router,
    private reg: RegisterService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private storage: Storage
    ) { 
  }

 async register(){
    if(this.username.length==0)
    {
      this.displayAlert('Invalid Input',"Please enter username");
    } else if (this.password.length==0) {
      this.displayAlert('Invalid Input',"Please enter password");
    } else if (this.repassword.length==0 || this.repassword != this.password) {
      this.displayAlert('Invalid Input',"Please repeat password") 
    } else {

    await this.showLoading();
    this.reg.registerUser(this.username, this.password)
    .subscribe(async res =>  {
        this.loadingCtrl.dismiss();
        console.log(res)
        
        if(res.error){
          this.displayAlert('Sign Up Error', res.error);
        }
    
        if(res.user){
          this.storage.set('username', res.user.username);
          this.loginreturn();
        }
      });
    }
      this.username = '';
      this.password = '';
      this.repassword = '';
  }

  loginreturn() {
    this.router.navigateByUrl('/home')
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
}
