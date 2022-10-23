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

  searchName: string = "";
  bestseller: boolean = false;
  discount: boolean = false;
  book_status: string = "";
  found: Book[] = [];
  categoryFileters: string[] = [];
  minPrice: any = null;
  maxPrice: any = null;

  gatunki: string[] = [];

  ngOnInit(): void {
    var okazje = null;
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { orderby: "price" }
        this.searchName = params["book"] ?? "";
        if (params["bestseller"]) {
          this.bestseller = true;
        }
        if (params["used"]) {
          this.book_status = "used";
        }
        if (params["category"]) {
          this.addCategoryFilter(params["category"]);
        }
      });

    this.findBooks();
    this.gatunki = this.repo.getCategories();
  }

  findBooks() {
    this.found = this.repo.getBooks();
    console.log(this.book_status);

    if (this.minPrice != null) {
      this.found = this.found.filter(b => b.price - b.price * b.discount >= this.minPrice);
    }

    if (this.maxPrice != null) {
      this.found = this.found.filter(b => b.price - b.price * b.discount <= this.maxPrice);
    }

    if (this.bestseller) {
      this.found = this.found.filter(b => b.isBestseller);
    }

    if (this.discount) {
      this.found = this.found.filter(b => b.discount > 0);
    }

    if (this.book_status == "used") {
      this.found = this.found.filter(b => b.used);
    } else if (this.book_status == "new") {
      this.found = this.found.filter(b => !b.used);
    }

    if (this.categoryFileters.length > 0) {
      this.categoryFileters.forEach(element => {
        this.found = this.found.filter(b => b.category == element);
      });
    }

    if (this.searchName && this.searchName != "") {
      this.found = this.found.filter(b => b.name.toLowerCase().indexOf(this.searchName.toLowerCase()) >= 0);
    }
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

  changeStatusFilter(status: string) {
    if (this.book_status == status) {
      this.book_status = "";
    } else {
      this.book_status = status;
    }
    this.findBooks();
  }
}
