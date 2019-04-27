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
  part1: any;
  part2: any;
  part3: any;

  public todo = [];

  public cards = [{ "name": "New Event", "task": "false", "checklist": "false" }];
  

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
            this.event = data.event;
            this.time = data.time;
            this.location = data.location;
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
          handler: data => {
            this.cards[0].task = "true";
            this.cards[0].checklist = "false";
            console.log(JSON.stringify(data));
            this.task = new task(this.event, this.time, this.location, this.cards[0].checklist, this.part1, this.part2, this.part3);
            this.todo.push(this.task);
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
            this.part1 = data.task1;
            this.part2 = data.task2;
            this.part3 = data.task3;
            console.log(JSON.stringify(data));
            this.task = new task(this.event, this.time, this.location, this.cards[0].checklist, this.part1, this.part2, this.part3);
            this.todo.push(this.task);
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