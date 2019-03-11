import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.page.html',
  styleUrls: ['./dates.page.scss'],
})
export class DatesPage implements OnInit {
	
  constructor(public router: Router,
    public nav: NavController,
    private storage: Storage
    ){
  }
  
  save(){
	this.nav.navigateRoot("menu/(menucontent:calendar)");
  }
  
  cancel(){
	this.nav.navigateRoot("menu/(menucontent:calendar)");
  }

  ngOnInit() {
  }

}
