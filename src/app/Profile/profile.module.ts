import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'primeng/accordion';
import { FormsModule } from '@angular/forms';
import {RatingModule} from 'primeng/rating';
import { ProfileRoutingModule } from './profile-routing.module';



@NgModule({
  declarations: [ProfileComponent, CareerHistoryComponent, ReviewsComponent],
  imports: [
    CommonModule,
    FormsModule,
    AccordionModule,
    ProfileRoutingModule,
    RatingModule,
    FontAwesomeModule,
    DialogModule,
    ReactiveFormsModule,
    CheckboxModule,
    DropdownModule,
    ImageCropperModule
    ]
})
export class ProfileModule { }
