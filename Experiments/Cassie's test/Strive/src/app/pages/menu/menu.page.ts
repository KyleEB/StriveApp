import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router'

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
        title: 'Profile Page',
        url: '/menu/(menucontent:profile)'
      }
    ];
  constructor(private router: Router) { 
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
  }

}
