import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage{

  username:string = '';
  password:string = '';
  repassword:string = '';
  constructor(public router: Router) { 
    
  }

  register(){
    if(this.username.length==0)
    {
      alert("Please enter username");
    } else if (this.password.length==0) {
      alert("Please enter password");
    } else if (this.repassword.length==0) {
      alert("Please repeat password") 
    }
  }

  loginreturn() {
    this.router.navigateByUrl('/home')
  }

}
