import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { MenuRoutingModule } from './menu-routing.module';
import { MainPageModule } from '../main/main.module';
import { ProfilePageModule } from '../profile/profile.module';
import { HomePageModule } from 'src/app/home/home.module';
import { RegisterPageModule } from 'src/app/register/register.module';
import { BlogPageModule } from '../blog/blog.module';
import { GoalsPageModule } from '../goals/goals.module';
import { AchievementsPageModule } from '../goals/achievements/achievements.module';
import { MeditationPageModule } from '../meditation/meditation.module';
import { CalendarPageModule } from '../calendar/calendar.module';
import { DatesPageModule } from '../calendar/dates/dates.module';
import { ChatRoomPageModule } from 'src/app/chat-room/chat-room.module';
import { SubscribePageModule } from '../subscribe/subscribe.module';
import { UserlistPageModule } from '../userlist/userlist.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuRoutingModule,
    ProfilePageModule,
    MainPageModule,
    HomePageModule,
    RegisterPageModule,
    BlogPageModule,
    GoalsPageModule,
    AchievementsPageModule,
    MeditationPageModule,
    CalendarPageModule,
    ChatRoomPageModule,
    SubscribePageModule,
    DatesPageModule,
    UserlistPageModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
