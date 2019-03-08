import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.scss'],
})
export class GoalsPage implements OnInit {

  constructor(
    private theme: ThemeService
  ) {
    this.theme.storedTheme;
   }
  ngOnInit() {
  }

}
