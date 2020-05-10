import { Component, OnInit } from '@angular/core';
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import * as moment from 'moment';

@Component({
  selector: 'app-user-proflie',
  templateUrl: './user-proflie.component.html',
  styleUrls: ['./user-proflie.component.scss']
})
export class UserProflieComponent implements OnInit {
  icons={facebook:faFacebookF, linkedIn:faLinkedinIn, github: faGithub }
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
  displaySideBar:boolean;
  
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
  }
  upcomingInterviewsDate(date, ele:HTMLElement){
    if(date > Date.now()){
      return  moment(date).endOf('seconds').fromNow(); 
    } else{
      ele.remove();
    }
  }

}
