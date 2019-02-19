import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/menu/menu.module#MenuPageModule'},  { path: 'blog', loadChildren: './pages/blog/blog.module#BlogPageModule' },
  { path: 'journal', loadChildren: './pages/blog/journal/journal.module#JournalPageModule' },
  { path: 'meditation', loadChildren: './pages/meditation/meditation.module#MeditationPageModule' },
  { path: 'goals', loadChildren: './pages/goals/goals.module#GoalsPageModule' },
  { path: 'achievements', loadChildren: './pages/goals/achievements/achievements.module#AchievementsPageModule' },
  { path: 'calendar', loadChildren: './pages/calendar/calendar.module#CalendarPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
