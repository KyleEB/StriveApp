import { NgModule } from '@angular/core';
import { MenuPage } from './menu.page';
import { MainPage } from '../main/main.page';
import { ProfilePage } from '../profile/profile.page';
import { Routes, RouterModule, Router } from '@angular/router'
import { RegisterPage } from 'src/app/register/register.page';
import { HomePage } from 'src/app/home/home.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'home',
        outlet: 'menucontent',
        component: HomePage
      },
      {
        path: 'register',
        outlet: 'menucontent',
        component: RegisterPage
      },
      {
        path: 'main',
        outlet: 'menucontent',
        component: MainPage
      },
      {
        path: 'profile',
        outlet: 'menucontent',
        component: ProfilePage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu/(menucontent:home)'
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
