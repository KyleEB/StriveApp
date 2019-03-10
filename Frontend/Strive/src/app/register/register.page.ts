import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './../services/register.service';
import { LoadingController, AlertController, MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage{
  fullname:string = '';
  email:string='';
  username:string = '';
  password:string = '';
  repassword:string = '';

  constructor(
    public router: Router,
    private reg: RegisterService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private storage: Storage,
    private menu: MenuController
    ) { 
  }

 async register(){
    if(this.fullname.length==0) {
      this.displayAlert('Invalid Input',"Please enter full name");
    } else if(this.email.length==0) {
      this.displayAlert('Invalid Input',"Please enter email");
    } else if(this.username.length==0) {
      this.displayAlert('Invalid Input',"Please enter username");
    } else if (this.password.length==0) {
      this.displayAlert('Invalid Input',"Please enter password");
    } else if (this.repassword.length==0 || this.repassword != this.password) {
      this.displayAlert('Invalid Input',"Please repeat password") 
    } else {

    await this.showLoading();
    this.reg.registerUser(this.username, this.password, this.fullname, this.email)
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
  ionViewWillEnter() {
    this.menu.enable(false);
  }
}
