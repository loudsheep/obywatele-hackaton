import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/services/book';
import { BookRepository } from 'src/app/services/book.repository.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor(private route: ActivatedRoute, private repo: BookRepository) { }

  searchName: any;
  found:Book[] = [];

  gatunki:string[] = [];

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { orderby: "price" }
        this.searchName = params["book"];
        console.log(this.searchName); // price
      });

      this.findBooks(); 
      this.gatunki = this.repo.getCategories();
      console.log(this.gatunki);
  }

  private findBooks() {
    this.found = this.repo.getBooks().filter(b => b.name.toLocaleLowerCase().indexOf(this.searchName.toLocaleLowerCase()) >= 0);
  }

  // testowy = {
  //   id: 1,
  //   name: "Kocham angulara",
  //   author: "Ja",
  //   category: "Dramat kurwa",
  //   description: "ty w sumie tego nie dodałem",
  //   price: 21.37,
  //   discount: 0.31,
  //   isBestseller: true,
  //   imgPath: "/assets/ksionszki/book.svg"
  // }
  // testowy2 = {
  //   id: 2,
  //   name: "Sranko",
  //   author: "pierdolca dostane",
  //   category: "Dramat kurwa",
  //   description: "ty w sumie tego nie dodałem",
  //   price: 420.69,
  //   discount: 0.69,
  //   isBestseller: true,
  //   imgPath: "/assets/ksionszki/book.svg"
  // }


}
