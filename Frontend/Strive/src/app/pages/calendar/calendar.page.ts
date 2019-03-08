import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../theme.service'
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  constructor(
    private theme: ThemeService
  ) {
    this.theme.storedTheme;
   }

  public form = [
      { val: 'Task 1', isChecked: false },
      { val: 'Task 2', isChecked: false },
      { val: 'Task 3', isChecked: false }
    ];
  
  ngOnInit() {
  }

}
