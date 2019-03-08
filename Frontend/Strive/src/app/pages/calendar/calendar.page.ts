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

  ngOnInit() {
  }

}
