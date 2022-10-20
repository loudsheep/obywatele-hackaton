import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/services/book';
import { BookRepository } from 'src/app/services/book.repository.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  priceAll = 0;
  booksInCart: Book[] = [
    {
      id: 0,
      name: 'Efektywne programowanie w języku Java',
      category: 'podręcznik',
      description: 'Podręcznik javy',
      price: 54.99,
      imgPath: ['/assets/ksionszki/book.svg'],
    },
    {
      id: 1,
      name: 'Efektywne programowanie w języku C++',
      category: 'podręcznik',
      description: 'Podręcznik C++',
      price: 44.99,
      imgPath: ['/assets/ksionszki/book.svg'],
    },
  ];

  testowy = {
    id: 1,
    name: 'Kocham angulara',
    author: 'Ja',
    category: 'Dramat kurwa',
    description: 'ty w sumie tego nie dodałem',
    price: 21.37,
    discount: 0.31,
    bestseller: true,
    imgPath: '/assets/ksionszki/book.svg',
  };
  testowy2 = {
    id: 2,
    name: 'Sranko',
    author: 'pierdolca dostane',
    category: 'Dramat kurwa',
    description: 'ty w sumie a',
    price: 420.69,
    discount: 0,
    bestseller: true,
    imgPath: '/assets/ksionszki/book.svg',
  };

  tempBooks = [this.testowy, this.testowy2, this.testowy, this.testowy2];
  cartEmpty: boolean = false;
  constructor(private repo: BookRepository, private cartService: CartService) {}

  ngOnInit(): void {
    this.loadBooks();
    this.calculatePrice();
  }

  // localstorage holds book.id array
  public loadBooks() {
    let bookIDs: number[] = this.cartService.getBookIDs();

    if (this.cartService.isEmpty()) {
      this.cartEmpty = true;
      return;
    }

    bookIDs.forEach((ID) => {
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

  public calculatePrice() {
    this.tempBooks.forEach((element) => {
      this.priceAll +=
        Math.round((element.price - element.price * element.discount) * 100) /
        100;
    });
  }
}
