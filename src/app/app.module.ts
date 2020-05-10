import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { AccordionModule } from 'primeng/accordion';
import { CalendarModule } from 'primeng/calendar';
import { CalendarComponent } from './calendar/calendar.component';
import { RatingModule } from 'primeng/rating';
import { OverlayPanelModule } from 'primeng/overlaypanel';

import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InterviewerDetailsComponent } from './interviewer-details/interviewer-details.component';

import { HttpClientModule } from '@angular/common/http';

//profile component...
import { ProfileComponent } from './profile/profile/profile.component';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { CareerHistoryComponent } from './profile/career-history/career-history.component';
import { ReviewsComponent } from './profile/reviews/reviews.component';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ChatComponent } from './chat/chat.component';
import { ChatListComponent } from './chat/chat-list/chat-list.component';
import { ChatContentComponent } from './chat/chat-content/chat-content.component';
import { FilterPipe } from './Pipe/filter.pipe';
import { ShortenPipe } from './Pipe/shorten.pipe';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { UserProflieComponent } from './Profile/user-proflie/user-proflie.component';

import {SidebarModule} from 'primeng/sidebar';
import { InterviewersComponent } from './interviewers/interviewers.component';
import {PaginatorModule} from 'primeng/paginator';
import {RadioButtonModule} from 'primeng/radiobutton';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    InterviewerDetailsComponent,
    CalendarComponent,
    ProfileComponent, 
    CareerHistoryComponent, 
    ReviewsComponent, 
    ChatComponent, 
    ChatListComponent, 
    ChatContentComponent, 
    FilterPipe, 
    ShortenPipe,
    UserProflieComponent,
    InterviewersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    AccordionModule,
    CalendarModule,
    RatingModule,
    OverlayPanelModule,
    DialogModule,
    ReactiveFormsModule,
    CheckboxModule,
    DropdownModule,
    ImageCropperModule,
    PickerModule,
    SidebarModule,
    PaginatorModule,
    RadioButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
