import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.page.html',
  styleUrls: ['./journal.page.scss'],
})
export class JournalPage implements OnInit {

  item:string = '';
  constructor(
  private theme: ThemeService,
  public nav: NavController,
  private alertCtrl: AlertController) {
    this.theme.storedTheme;
   }
   
	backToMain(){
		this.nav.navigateRoot("menu/(menucontent:main)");
	}
   
   save(item){
		
   }
   viewNotes(){
	
   }
  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Journal',
      message: 'Here you can write all of your personal thoughts, they are just for you',
      buttons: ['OK']
    });
    await alert.present();
  }

}
