import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';
import { NavController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

	public feed = [];
	public fullname:string;
	public time:any;

	constructor(
		private theme: ThemeService,
		private alertCtrl: AlertController,
		public nav: NavController,
		public storage: Storage
		
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
		
		async blogPost() {
			const alert = await this.alertCtrl.create({
				header: 'Post to your feed',
				inputs: [
					{
						name: 'Post',
						placeholder: 'Whats on your mind?'
					}
				],
				buttons: [
					{
						text: 'Post',
						handler: data => {
							console.log(JSON.stringify(data));
							console.log(data.Post);
							this.time = Date.now();
							this.feed.push(data.Post);
						}
					}
				]
			});
			await alert.present();
		}
	
		async loadUser() {
			await this.storage.get('user').then((user) => {
				console.log('your name is ' + user.fullname);
				console.log('your username is ' + user.username);
				this.fullname = user.fullname;
			});
		}
}