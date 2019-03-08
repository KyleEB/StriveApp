import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-meditation',
  templateUrl: './meditation.page.html',
  styleUrls: ['./meditation.page.scss'],
})
export class MeditationPage implements OnInit {

  constructor(
    private theme: ThemeService
  ) {
    this.theme.storedTheme;
   }
  ngOnInit() {
  }

}
