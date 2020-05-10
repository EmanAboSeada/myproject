import { Component, OnInit } from '@angular/core';
import { faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-interviewers',
  templateUrl: './interviewers.component.html',
  styleUrls: ['./interviewers.component.scss']
})
export class InterviewersComponent implements OnInit {
  searchIcon=faSearch;
  filteredUserList;
  searchText="";
  startIndex=0;
  endIndex=5;
  rows= 10;
  usersNumber;

  users = [
    {
      id: 1,
      name: "Khalid",
      verified: true,
      companyNmae: "orange",
      image: "",
      amount: "100$",
      rate: 1,
      bio:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nisi excepturi est neque, voluptates sint ab quae voluptatum, minus eligendi iste laborum rem nihil aut adipisci? Corporis labore repellendus natus?"
    },
    {
      id: 2,
      name: "Mostafa",
      verified: true,
      companyNmae: "Vodafone EG",
      image: "",
      amount: "75$",
      rate: 2,
      bio:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nisi excepturi est neque, voluptates sint ab quae voluptatum, minus eligendi iste laborum rem nihil aut adipisci? Corporis labore repellendus natus?"
    },
    {
      id: 3,
      name: "Ahmed",
      verified: false,
      companyNmae: "Orange",
      image: "",
      amount: "150$",
      rae: 3,
      bio:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nisi excepturi est neque, voluptates sint ab quae voluptatum, minus eligendi iste laborum rem nihil aut adipisci? Corporis labore repellendus natus?"
    },
    {
      id: 4,
      name: "Mohamed",
      verified: true,
      companyNmae: "orange",
      image: "",
      amount: "100$",
      rate: 4,
      bio:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nisi excepturi est neque, voluptates sint ab quae voluptatum, minus eligendi iste laborum rem nihil aut adipisci? Corporis labore repellendus natus?"
    },
    {
      id: 5,
      name: "Rana",
      verified: true,
      companyNmae: "orange",
      image: "",
      amount: "100$",
      rate: 1,
      bio:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nisi excepturi est neque, voluptates sint ab quae voluptatum, minus eligendi iste laborum rem nihil aut adipisci? Corporis labore repellendus natus?"
    },
    {
      id: 6,
      name: "Eman",
      verified: true,
      companyNmae: "Vodafone EG",
      image: "",
      amount: "75$",
      rate: 2,
      bio:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nisi excepturi est neque, voluptates sint ab quae voluptatum, minus eligendi iste laborum rem nihil aut adipisci? Corporis labore repellendus natus?"
    },
    {
      id: 7,
      name: "Yousef",
      verified: false,
      companyNmae: "Orange",
      image: "",
      amount: "150$",
      rae: 3,
      bio:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nisi excepturi est neque, voluptates sint ab quae voluptatum, minus eligendi iste laborum rem nihil aut adipisci? Corporis labore repellendus natus?"
    },
    {
      id: 8,
      name: "Ibraheem",
      verified: false,
      companyNmae: "orange",
      image: "",
      amount: "100$",
      rate: 4,
      bio:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nisi excepturi est neque, voluptates sint ab quae voluptatum, minus eligendi iste laborum rem nihil aut adipisci? Corporis labore repellendus natus?"
    },
     {
      id: 9,
      name: "Thanaa",
      verified: false,
      companyNmae: "Orange",
      image: "",
      amount: "150$",
      rae: 3,
      bio:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nisi excepturi est neque, voluptates sint ab quae voluptatum, minus eligendi iste laborum rem nihil aut adipisci? Corporis labore repellendus natus?"
    },
    {
      id: 10,
      name: "Aya",
      verified: false,
      companyNmae: "orange",
      image: "",
      amount: "100$",
      rate: 4,
      bio:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nisi excepturi est neque, voluptates sint ab quae voluptatum, minus eligendi iste laborum rem nihil aut adipisci? Corporis labore repellendus natus?"
    },
    {
      id: 11,
      name: "Yara",
      verified: true,
      companyNmae: "orange",
      image: "",
      amount: "100$",
      rate: 1,
      bio:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nisi excepturi est neque, voluptates sint ab quae voluptatum, minus eligendi iste laborum rem nihil aut adipisci? Corporis labore repellendus natus?"
    },
    {
      id: 12,
      name: "Ali",
      verified: true,
      companyNmae: "Vodafone EG",
      image: "",
      amount: "75$",
      rate: 2,
      bio:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nisi excepturi est neque, voluptates sint ab quae voluptatum, minus eligendi iste laborum rem nihil aut adipisci? Corporis labore repellendus natus?"
    }
  ];
  constructor() { }

  ngOnInit(): void {
    this.usersNumber = this.users.length;
    this.filteredUserList = this.users;
  }
  paginate(e:any){
    this.startIndex = e.first;
    this.endIndex = e.first + this.rows;
  }
  changeSearchText(){
    if(this.searchText === ''){
      this.filteredUserList = this.users;
    }else{
      this.filteredUserList =  this.users.filter((val)=>{
          return val['name'].toLowerCase().search(this.searchText.toLowerCase()) !== -1 ||
          val['companyNmae'].toLowerCase().search(this.searchText.toLowerCase()) !== -1;
        })
      }
    this.usersNumber = this.filteredUserList.length;
    
  }

}
