import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/services/book';
import { BookRepository } from 'src/app/services/book.repository.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  booksInCart: Book[] = [];
  cartEmpty: boolean = true;
  constructor(private repo: BookRepository) { }

  ngOnInit(): void {
    this.loadCartFromLocalStorage();
  }

  // localstorage holds book.id array
  public loadCartFromLocalStorage() {
    if (localStorage.getItem('cart')) { // yay, localstorage has some items, maybe
      let data = JSON.parse(localStorage.getItem('cart') ?? '[]');

      if (data.length == 0) {
        this.cartEmpty = true;
        return;
      }

      for (let i = 0; i < data.length; i++) {
        let book = this.repo.getBook(data[i]);
        if (book) {
          this.booksInCart.push(book);
        }
      }
      this.cartEmpty = false;
    }
  }

  public saveCartToLocalStorage() {
    let idArray = this.booksInCart.map(x => x.id);
    console.log(JSON.stringify(idArray));
    try {
      localStorage.setItem('cart', JSON.stringify(idArray));
    } catch (e) {
      // sometimes throws QuotaExceededError
      console.log(e);
    }
  }

  public deleteFromCart(bookId: number) {
    let idx = this.booksInCart.findIndex(x => x.id == bookId);
    if (idx >= 0) {
      this.booksInCart.splice(idx, 1);
    }

    this.saveCartToLocalStorage();
  }

  // ! call this is other components to get item count !
  public static getCartItemCount(): number {
    if (localStorage.getItem('cart')) { // yay, localstorage has some items, maybe
      let data = JSON.parse(localStorage.getItem('cart') ?? '[]');
      return data.length;
    }
    return 0;
  }

}
