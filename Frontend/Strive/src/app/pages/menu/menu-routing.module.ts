import { NgModule } from '@angular/core';
import { MenuPage } from './menu.page';
import { MainPage } from '../main/main.page';
import { ProfilePage } from '../profile/profile.page';
import { Routes, RouterModule, Router } from '@angular/router'
import { RegisterPage } from 'src/app/register/register.page';
import { HomePage } from 'src/app/home/home.page';
import { BlogPage } from '../blog/blog.page';
import { JournalPage } from '../blog/journal/journal.page';
import { MeditationPage } from '../meditation/meditation.page';
import { GoalsPage } from '../goals/goals.page';
import { AchievementsPage } from '../goals/achievements/achievements.page';
import { CalendarPage } from '../calendar/calendar.page';

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
        path: 'calendar',
        outlet: 'menucontent',
        component: CalendarPage
      },
      {
        path: 'blog',
        outlet: 'menucontent',
        component: BlogPage
      },
      {
        path: 'journal',
        outlet: 'menucontent',
        component: JournalPage
      },
      {
        path: 'meditation',
        outlet: 'menucontent',
        component: MeditationPage
      },
      {
        path: 'goals',
        outlet: 'menucontent',
        component: GoalsPage
      },
      {
        path: 'achievements',
        outlet: 'menucontent',
        component: AchievementsPage
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
