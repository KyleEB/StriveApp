import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../theme.service'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  event: any;
  time: any;
  location: any;
public cards = [{"name": "New Event", "task": "false", "checklist": "false"}];
public form = [
      { val: 'Task1', isChecked: false },
      { val: 'Task2', isChecked: false },
      { val: 'Task3', isChecked: false }
    ];

  constructor(
    private theme: ThemeService,
    private alertCtrl: AlertController    ) {
    this.theme.storedTheme;
   }

  async add() {
    let alert = await this.alertCtrl.create({
      header: 'Add Checklist?',
      cssClass: 'custom',
      buttons: [
        {
          text: "Yes",
          handler: () => {
            this.customizeForm();
            this.cards[0].task = "true";
            this.cards[0].checklist = "true";
            console.log(this.form);
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
          handler: data => {
            if(typeof event != null){
              this.event = data.event;
              this.time =data.time;
              this.location = data.location;
            }
            console.log(data);
            this.add();
			    }
      }
      ]
    });
    return await alert.present();
  }
async customizeForm(){
    let alert = await this.alertCtrl.create({
      cssClass:'custom',
      inputs: [
        {
          type: 'text',
          name: 'task1',
          placeholder: 'New Task'
        },
        {
          type: 'text',
          name: 'task2',
          placeholder: 'New Task'
        },
        {
          type: 'text',
          name: 'task3',
          placeholder: 'New Task'
        }
      ],
      buttons: [
        {
          text: 'next',
          handler: data => {
          if(this.form)
            this.form[0].val = data.task1;
            this.form[1].val = data.task2;
            this.form[2].val = data.task3;
            console.log(this.form);
            this.cards[0].checklist = "true";
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
  
  
  


