import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  subColor:string="primary";
  subscribeStatus:string="Subscribe"
  subscribed:boolean=false;

  constructor() { }

  ngOnInit() {
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
  }

  changeColor(){
    if(this.subColor=="primary")
    {
      this.subColor="light";
    } else {
      this.subColor="primary";
    }
  }

}
