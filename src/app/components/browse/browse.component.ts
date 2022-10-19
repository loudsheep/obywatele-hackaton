import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  testowy = {
    id: 1,
    name: "Kocham angulara",
    author: "Ja",
    category: "Dramat kurwa",
    description: "ty w sumie tego nie dodałem",
    price: 21.37,
    discount: 0.31,
    isBestseller: true,
    imgPath: "/assets/ksionszki/book.svg"
  }
  testowy2 = {
    id: 2,
    name: "Sranko",
    author: "pierdolca dostane",
    category: "Dramat kurwa",
    description: "ty w sumie tego nie dodałem",
    price: 420.69,
    discount: 0.69,
    isBestseller: true,
    imgPath: "/assets/ksionszki/book.svg"
  }
  
  found = [this.testowy,this.testowy2];

}
