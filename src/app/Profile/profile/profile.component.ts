import { Component, OnInit } from '@angular/core';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import * as moment from 'moment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  icons = { editIcon: faPencilAlt, facebook: faFacebookF, linkedin: faLinkedinIn, github: faGithub };
  displayIntroForm: boolean = false;
  displayUserImageDialog: boolean = false;
  introForm: FormGroup;
  editUserImageForm:FormGroup;
  //crop image...
  imageChangedEvent: any = '';
  croppedImage: any = '';
  displaySideBar;
  user:{
    id: number,
      name: string,
      fName: string,
      lName: string,
      verified: boolean,
      companyNmae: string,
      image: string,
      amount: string,
      rate: number,
      jobTitle: string,
      interviewsNumber: number,
      bio:string,
      upcomingInterviews:{userId:number,userName:string, date:Date}[]
  }
  
  constructor() { }

  ngOnInit(): void {
    this.user={
      id: 2,
      name: "Eman Abo Seada",
      fName: "Eman",
      lName: "Aboo Seada",
      verified: true,
      companyNmae: "Vodafone EG",
      image: "",
      amount: "75",
      rate: 4,
      jobTitle: 'Frontend Developer',
      interviewsNumber: 5,
      bio:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nisi excepturi est neque, voluptates sint ab quae voluptatum, minus eligendi iste laborum rem nihil aut adipisci? Corporis labore repellendus natus",
      upcomingInterviews:[
        {userId:1, userName:'Ahmed', date:new Date(Date.now()+ 6000)},
        {userId:2, userName:'Mohamed', date:new Date(Date.now()+ 60000)},
        {userId:3, userName:'Mahmoud', date:new Date(Date.now()+ 2000000)},
        {userId:4, userName:'Mostafa', date:new Date(Date.now()+ 500000000)}
      ]
    }
    this.introForm = new FormGroup({
      'fname': new FormControl(this.user.fName, Validators.required),
      'lname': new FormControl(this.user.lName, Validators.required),
      'headline': new FormControl(this.user.jobTitle),
      'sammary': new FormControl(this.user.bio),
      'interviewRate': new FormControl(this.user.amount)
    })
    this.editUserImageForm = new FormGroup({
      'userImageSrc': new FormControl()
    })
  }
  upcomingInterviewsDate(date, ele:HTMLElement){
    if(date > Date.now()){
      return  moment(date).endOf('seconds').fromNow(); 
    } else{
      ele.remove();
    }
  }
  showIntroFormDialog() {
    this.displayIntroForm = true;
  }
  submitIntroForm() {
    this.displayIntroForm = false;
  }
  showUserImageDialog() {
    this.displayUserImageDialog = true;
  }

  uploadUserImage(e) {
    this.imageChangedEvent = e;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
}

}
