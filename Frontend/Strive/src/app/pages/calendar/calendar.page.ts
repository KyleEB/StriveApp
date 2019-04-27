import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../theme.service'
import { AlertController } from '@ionic/angular';
import { task } from './task';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  event: any;
  time: any;
  location: any;
  task: any;

  public todo = [];

  public cards = [{ "name": "New Event", "task": "false", "checklist": "false" }];
  public form = [
    { val: 'Task1', isChecked: false },
    { val: 'Task2', isChecked: false },
    { val: 'Task3', isChecked: false }
  ];

  constructor(
    private theme: ThemeService,
    private alertCtrl: AlertController) {
    this.theme.storedTheme;
  }

  async popup() {
    let alert = await this.alertCtrl.create({
      header: 'New Event',
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
      ], buttons: [
        {
          text: "save",
          handler: data => {
            this.add();
            console.log(JSON.stringify(data));
            this.task = new task(data.event, data.time, data.location, this.cards[0].checklist);
            this.todo.push(this.task);
          }
        }
      ]
    });
    return await alert.present();
  }

  async add() {
    let alert = await this.alertCtrl.create({
      header: 'Add Checklist?',
      buttons: [
        {
          text: "Yes",
          handler: () => {
            this.customizeForm();
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

  async customizeForm() {
    let alert = await this.alertCtrl.create({
      cssClass: 'custom',
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
            this.form[0].val = data.task1;
            this.form[1].val = data.task2;
            this.form[2].val = data.task3;
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