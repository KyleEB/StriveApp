import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

	constructor(
		private theme: ThemeService,
		public nav: NavController
	) {
		this.theme.storedTheme;
	}
	
	ngOnInit() {
	}
}
