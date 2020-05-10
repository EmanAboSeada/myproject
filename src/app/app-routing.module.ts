import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import { ProfileComponent } from './profile/profile/profile.component';
import { ChatComponent } from './chat/chat.component';
import { ChatContentComponent } from './chat/chat-content/chat-content.component';
import { UserProflieComponent } from './Profile/user-proflie/user-proflie.component';
import { InterviewersComponent } from './interviewers/interviewers.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
   {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'registration',
    loadChildren: ()=> import ('./registraion/registraion.module').then(m => m.RegistraionModule)
  },
  {
    path: "profile/:id",
    component: ProfileComponent
  },
  {
    path: "user-profile/:id",
    component: UserProflieComponent
  },
  {
    path: "chat",
    component: ChatComponent,
    children:[
      {path:":id", component: ChatContentComponent}
      
    ]
  },
  {
    path: "feed",
    component: InterviewersComponent
  },
  {
    path:'**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
