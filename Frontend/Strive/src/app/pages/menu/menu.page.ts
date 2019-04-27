import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router'
import { HomePage } from 'src/app/home/home.page';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

    selectedPath = '';
    pages = [
      {
        title: 'Main Page',
        url: '/menu/(menucontent:main)'
      },
      {
        title: 'To-Do Page',
        url: '/menu/(menucontent:calendar)'
      },
      {
        title: 'Blog Page',
        url: '/menu/(menucontent:blog)'
      },
      {
        title: 'Meditation Page',
        url: '/menu/(menucontent:meditation)'
      },
      {
        title: 'Goals Page',
        url: '/menu/(menucontent:goals)'
      },
      {
        title: 'Achievements Page',
        url: '/menu/(menucontent:achievements)'
      },
      {
        title: 'Profile Page',
        url: '/menu/(menucontent:profile)'
      }
    ];
  constructor(private router: Router,
      private loginpage : HomePage,
      private theme: ThemeService) { 
      this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;    
    });
  }

  ngOnInit() {
  }

  logout(){
    this.theme.setTheme('default')
    this.loginpage.removeUserLocalStorage();
    this.router.navigateByUrl('home');
  }

}
