import { Component, OnInit } from '@angular/core';
import { faPlus, faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt} from '@fortawesome/free-regular-svg-icons';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-career-history',
  templateUrl: './career-history.component.html',
  styleUrls: ['./career-history.component.scss']
})
export class CareerHistoryComponent implements OnInit {
  icons={plus: faPlus, edit: faPencilAlt, delete: faTrashAlt};
  addCareerForm;
  displayAddCareerForm: boolean = false;
  stillWorkChecked: boolean = false;
  YearsOptions: object[]= [];
  MonthsOptions: object[]=[];
  startYear;
  startMonth;
  endYear;
  endMonth;

  constructor() { }

  ngOnInit(): void {
    this.addCareerForm = new FormGroup({
      'company': new FormControl("", Validators.required),
      'title': new FormControl("", Validators.required),
      'stillWork': new FormControl('false'),
      'startMonth': new FormControl( '', Validators.required),
      'startYear': new FormControl(''),
      'endMonth': new FormControl(),
      'endYear': new FormControl()
    })

    let currentYear =new Date( Date.now()).getFullYear();
    for(let i=1990; i <= currentYear; i++){
      this.YearsOptions.push({'year': i});      
    }
    this.MonthsOptions = [
      {'month': 'January'},{'month': 'February'},
      {'month': 'March'},{'month': 'April'},
      {'month': 'May'},{'month': 'June'},
      {'month': 'July'},{'month': 'August'},
      {'month': 'September'},{'month': 'October'},
      {'month': 'November'},{'month': 'December'}
    ]

  }
  displayAddCareerDialog(){
    this.displayAddCareerForm = true;
  }

}
