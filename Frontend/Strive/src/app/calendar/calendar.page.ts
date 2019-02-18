import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './../services/register.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
	
	time: string;
	name: string;
	desc: string;
	loc: string;

   constructor(public router: Router,
    private reg: RegisterService,
    private storage: Storage,
    ){
  }
  
  goDate(){
		this.router.navigateByUrl('/dates');
	}

  ngOnInit() {
  }

}
