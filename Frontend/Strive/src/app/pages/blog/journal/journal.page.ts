import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.page.html',
  styleUrls: ['./journal.page.scss'],
})
export class JournalPage implements OnInit {

  text:string = '';
  constructor(
  private theme: ThemeService,
	public nav: NavController) {
    this.theme.storedTheme;
   }
   
	backToMain(){
		this.nav.navigateRoot("menu/(menucontent:main)");
	}
   
   save(){
	
   }
   viewNotes(){
	
   }
  ngOnInit() {
  }

}
