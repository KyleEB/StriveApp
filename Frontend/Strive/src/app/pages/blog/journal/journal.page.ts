import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.page.html',
  styleUrls: ['./journal.page.scss'],
})
export class JournalPage implements OnInit {

  constructor(
    private theme: ThemeService
  ) {
    this.theme.storedTheme;
   }
  ngOnInit() {
  }

}
