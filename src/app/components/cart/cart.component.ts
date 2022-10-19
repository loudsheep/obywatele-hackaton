import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/services/book';
import { BookRepository } from 'src/app/services/book.repository.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  booksInCart: Book[] = [];
  cartEmpty: boolean = true;
  constructor(private repo: BookRepository, private cartService: CartService) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  // localstorage holds book.id array
  public loadBooks() {
    let bookIDs: number[] = this.cartService.getBookIDs();

    if (this.cartService.isEmpty()) {
      this.cartEmpty = true;
      return;
    }

    bookIDs.forEach(ID => {
      let book = this.repo.getBook(ID);
      if (book) {
        this.booksInCart.push(book);
      }
    });
    this.cartEmpty = false;
  }

  public deleteFromCart(bookId: number) {
    this.cartService.deleteFromCart(bookId);
  }
}
