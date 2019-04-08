import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

	constructor(
		private theme: ThemeService,
		private alertCtrl: AlertController,
		public nav: NavController
	) {
		this.theme.storedTheme;
	}
	
	ngOnInit() {
	}

	async presentAlert() {
		const alert = await this.alertCtrl.create({
		  header: 'Blog',
		  message: 'On this page you can post your thoughts and achievements as well as see your friends posts',
		  buttons: ['OK']
		});
	
		await alert.present();
	  }
}
