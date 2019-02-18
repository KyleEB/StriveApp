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
    public navCrtl: NavController,
    private storage: Storage
    ){
  }
  
  save(){
	this.router.navigateByUrl('/calendar');
  
	eventTime = time;
	eventName = name;
	eventDesc = desc;
	eventLocation = loc;
	
	this.navCrtl.push(calendar, {
		Time: eventTime,
		Name: eventName,
		description: eventDesc,
		location: eventLocation
	});
  }
  
  cancel(){
	this.router.navigateByUrl('/calendar');
  }

  ngOnInit() {
  }

}
