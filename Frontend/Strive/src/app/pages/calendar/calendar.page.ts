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
public cards = [{"name": "New Event", "task": "false", "checklist": "true"}];
public form = [
      { val: 'Task 1', isChecked: false },
      { val: 'Task 2', isChecked: false },
      { val: 'Task 3', isChecked: false }
    ];
  
  eventName: any;
  time: any;

  constructor(
    private theme: ThemeService,
    private alertCtrl: AlertController    ) {
    this.theme.storedTheme;
   }

  async add() {
    let alert = await this.alertCtrl.create({
      header: 'Add Checklist?',
      buttons: [
        {
          text: "Yes",
          handler: () => {
            this.cards[0].task = "true";
            this.cards[0].checklist = "true";
          }
        },
        {
          text: "No",
          handler: () => {
            this.cards[0].task = "true";
            this.cards[0].checklist = "false";
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
      inputs: [
        {
          type: 'text',
          name: 'event',
          placeholder: 'Event Name'
        },
        {
          type: 'text',
          name: 'time',
          placeholder: 'Time'
        },
        {
          type: 'text',
          name: 'location',
          placeholder: 'Location'
        }
      ],buttons: [
	    {
          text: "save",
          handler: () => {
            this.add();
			    }
      }
      ]
    });
    return await alert.present();
  }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'To-Do',
      message: 'This is where you can keep track of your goals!',
      buttons: ['OK']
    });

    await alert.present();
  }
}
  
  
  


