import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router'
import { HomePage } from 'src/app/home/home.page';

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
        title: 'Calendar Page',
        url: '/menu/(menucontent:calendar)'
      },
      {
        title: 'Blog Page',
        url: '/menu/(menucontent:blog)'
      },
      {
        title: 'Journal Page',
        url: '/menu/(menucontent:journal)'
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
    private loginpage : HomePage) { 
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
  }

  logout(){
    this.loginpage.removeUserLocalStorage();
    this.router.navigateByUrl('home');
  }

}
