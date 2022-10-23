import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/services/book';
import { BookRepository } from 'src/app/services/book.repository.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor(private route: ActivatedRoute, private repo: BookRepository, private cart: CartService) { }

  searchName: any;
  bestseller: boolean = false;
  discount: boolean = false;
  found: Book[] = [];
  categoryFileters: string[] = [];
  minPrice: any = null;
  maxPrice: any = null;

  gatunki: string[] = [];

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { orderby: "price" }
        this.searchName = params["book"];
        console.log(this.searchName); // price
      });

    this.findBooks();
    this.gatunki = this.repo.getCategories();
  }

  findBooks() {
    this.found = this.repo.getBooks();

    if (this.minPrice != null) {
      this.found = this.found.filter(b => b.price >= this.minPrice);
    }

    if (this.maxPrice != null) {
      this.found = this.found.filter(b => b.price <= this.maxPrice);
    }

    if (this.bestseller) {
      this.found = this.found.filter(b => b.isBestseller);
    }

    if (this.discount) {
      this.found = this.found.filter(b => b.discount > 0);
    }

    if (this.categoryFileters.length > 0) {
      this.categoryFileters.forEach(element => {
        this.found = this.found.filter(b => b.category == element);
      });
    }

    this.found = this.found.filter(b => b.name.toLocaleLowerCase().indexOf(this.searchName.toLocaleLowerCase()) >= 0);
  }

  addBookToCart(id: number) {
    this.cart.addToCart(id);
  }

  addCategoryFilter(category: string) {
    if (this.categoryFileters.indexOf(category) != -1) {
      this.categoryFileters.splice(this.categoryFileters.indexOf(category), 1);
    } else {
      this.categoryFileters.push(category);
    }
    this.findBooks();
  }
}
