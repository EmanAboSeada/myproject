import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users = [
    {
        id: 1,
        name: "Khalid Kandil",
        verified: true,
        companyNmae: "orange",
        image: "",
        amount: "100$",
        rate:1,
        bio:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nisi excepturi est neque, voluptates sint ab quae voluptatum, minus eligendi iste laborum rem nihil aut adipisci? Corporis labore repellendus natus?"
    },
    {
        id: 2,
        name: "Eman Abo Seada",
        verified: true,
        companyNmae: "Vodafone EG",
        image: "",
        amount: "75$",
        rate:2,
        bio:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nisi excepturi est neque, voluptates sint ab quae voluptatum, minus eligendi iste laborum rem nihil aut adipisci? Corporis labore repellendus natus?"
    },
    {
        id: 3,
        name: "Khalid Kandil",
        verified: false,
        companyNmae: "Orange",
        image: "",
        amount: "150$",
        rate:3,
        bio:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nisi excepturi est neque, voluptates sint ab quae voluptatum, minus eligendi iste laborum rem nihil aut adipisci? Corporis labore repellendus natus?"
    },
    {
        id: 4,
        name: "Khalid Kandil",
        verified: false,
        companyNmae: "orange",
        image: "",
        amount: "100$",
        rate:4,
        bio:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nisi excepturi est neque, voluptates sint ab quae voluptatum, minus eligendi iste laborum rem nihil aut adipisci? Corporis labore repellendus natus?"
    }
];

  constructor() { }

  ngOnInit(): void {
  }

}
