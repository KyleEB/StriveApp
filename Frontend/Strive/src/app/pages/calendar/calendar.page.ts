import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../theme.service'
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  constructor(
    private theme: ThemeService,
	public nav: NavController
  ) {
    this.theme.storedTheme;
   }

   goDate(){
	this.nav.navigateRoot("menu/(menucontent:dates)");
  }

  public form = [
      { val: 'Task 1', isChecked: false },
      { val: 'Task 2', isChecked: false },
      { val: 'Task 3', isChecked: false }
    ];
  backToMain(){
	this.nav.navigateRoot("menu/(menucontent:main)");
  }
  ngOnInit() {
  }

}
