import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-interviewer-details',
  templateUrl: './interviewer-details.component.html',
  styleUrls: ['./interviewer-details.component.scss']
})
export class InterviewerDetailsComponent implements OnInit {
  @Input() user;
  constructor() { }

  ngOnInit(): void {

  }

}
