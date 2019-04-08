import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../theme.service'
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

public form = [
      { val: 'Task 1', isChecked: false },
      { val: 'Task 2', isChecked: false },
      { val: 'Task 3', isChecked: false }
    ];

  constructor(
    private theme: ThemeService,
    private alertCtrl: AlertController,
	private nav:NavController
  ) {
    this.theme.storedTheme;
   }

  async add() {
    let alert = await this.alertCtrl.create({
      header: 'Add Checklist',
      buttons: [
        {
          text: "Task2",
          handler: data => {
            this.form[1].val = "true";
          }
        },
		{
          text: "Task2",
          handler: data => {
            this.form[2].val = "true";
          }
        },
        {
          text: "Task3",
          handler: data => {
            this.form[3].val = "true";
          }
        }
      ]
    });
    return await alert.present();
  }


  async popup(){
    let alert = await this.alertCtrl.create({
      header: 'New Event',
      cssClass: 'custom',
      buttons: [
	    {
          text: "save",
          handler: data => {
            this.add();
			}
		}
      ]
    });
    return await alert.present();
  }

  ngOnInit() {
  }
}
  
  
  


