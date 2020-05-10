import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  currentEvent:{day:Date, interviwerID:number, interviwerName:string};
  eventsList: {day:Date, interviwerID:number, interviwerName:string}[];
  validTimeList:{day:Date, hours:string[]}[]=[];
  validTime:{day:Date, hours:string[]};
  invalidDates: Date[];
  selectedHour:string;

  interviwerPage: boolean = true;
  constructor(private router:Router) { }
  selectedDate: Date;
  minDateValue;
  maxDateValue;
  ngOnInit() {
   this.eventsList =[
      {
        day: new Date(2020,4,20),
        interviwerID: 2,
        interviwerName: 'khalid'
      },
      {
        day: new Date(2020,4,28),
        interviwerID: 2,
        interviwerName: 'Ahmed'
      }
    ]
    this.validTimeList = [
      {day: new Date(2020,4,9),hours:["1 PM : 2 PM", "2 PM : 3 PM", "4 PM : 5 PM"]}, 
      {day: new Date(2020,4,11),hours:["2 PM : 3 PM", "3 PM : 4 PM", "5 PM : 6 PM"]}, 
      {day: new Date(2020,4,12),hours:["10 AM : 11 AM", "2 PM : 3 PM"]}];

    this.minDateValue = new Date(Date.now());
    this.maxDateValue = new Date(Date.now() + (1000*60*60*24*30));
    this.interviwerPage = this.router.url.includes('user-profile');
    this.invalidDates = [new Date('2020/5/8'), new Date('2020/5/10'), new Date('2020/6/1'), new Date('2020/5/20'),
    new Date('2020/5/15'), new Date('2020/5/16'), new Date('2020/5/17'), new Date('2020/5/18')]
  }

  selectDate(e:Date){
    if(this.interviwerPage){
      (document.querySelectorAll('.book-btn'))[0].removeAttribute('disabled');
      (document.querySelectorAll('.book-btn'))[1].removeAttribute('disabled');
    }
    //set events in profile page...
    this.currentEvent= this.eventsList.find((value)=>{
      return (value['day'].getDate() === e.getDate()
      && value['day'].getMonth() === e.getMonth()
      && value['day'].getFullYear() === e.getFullYear())? value: null;
    })

    //set valid hours in intervwer page...
    this.validTime= this.validTimeList.find((value)=>{
      return (value['day'].getDate() === e.getDate()
      && value['day'].getMonth() === e.getMonth()
      && value['day'].getFullYear() === e.getFullYear())? value: null;
    })
   
    
  }
  checked: boolean = true;
  checkeventDate(d: Date){
    return this.eventsList.find((value, index, arry)=>{
      return (value['day'].getDate() === d['day'] 
      && value['day'].getMonth() === d['month'] 
      && value['day'].getFullYear() === d['year'])? true: false;
    })
  }
  bookInterview(){
    console.log(this.selectedHour); 
  }
}
