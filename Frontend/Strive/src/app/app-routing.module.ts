import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/menu/menu.module#MenuPageModule'},  { path: 'chat-room', loadChildren: './chat-room/chat-room.module#ChatRoomPageModule' },
  { path: 'subscribe', loadChildren: './pages/subscribe/subscribe.module#SubscribePageModule' },
  { path: 'userlist', loadChildren: './pages/userlist/userlist.module#UserlistPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
