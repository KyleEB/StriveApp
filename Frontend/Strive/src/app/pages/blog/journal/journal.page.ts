import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.page.html',
  styleUrls: ['./journal.page.scss'],
})
export class JournalPage implements OnInit {

  text:string = '';
  constructor(
  private theme: ThemeService,
	private storage: Storage) {
    this.theme.storedTheme;
   }
   
   save(){
	this.storage.set('newNote', this.text);
	
   }
   viewNotes(){
	 this.storage.get('newNote').then((data) => {
		console.log(data);
	 });
   }
  ngOnInit() {
  }

}
