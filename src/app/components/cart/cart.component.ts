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
  priceAllFormated = "";
  booksInCart: any[] = [
    // {
    //   id: 0,
    //   name: 'Efektywne programowanie w języku Java',
    //   category: 'podręcznik',
    //   description: 'Podręcznik javy',
    //   price: 54.99,
    //   imgPath: ['/assets/ksionszki/book.svg'],
    //   author: 'fdjksa',
    //   discount: 12,
    // },
    // {
    //   id: 1,
    //   name: 'Efektywne programowanie w języku C++',
    //   category: 'podręcznik',
    //   description: 'Podręcznik C++',
    //   price: 44.99,
    //   imgPath: ['/assets/ksionszki/book.svg'],
    //   author: 'marcin świerta',
    //   discount: 0,
    // },
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
    count: 1,
    maxCount: 10,
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
    count: 1,
    maxCount: 5,
  };
  testowy3 = {
    id: 1,
    name: 'Kocham angulara',
    author: 'Ja',
    category: 'Dramat kurwa',
    description: 'ty w sumie tego nie dodałem',
    price: 21.37,
    discount: 0.31,
    bestseller: true,
    imgPath: '/assets/ksionszki/book.svg',
    count: 1,
    maxCount: 10,
  };
  testowy4 = {
    id: 2,
    name: 'Sranko',
    author: 'pierdolca dostane',
    category: 'Dramat kurwa',
    description: 'ty w sumie a',
    price: 420.69,
    discount: 0,
    bestseller: true,
    imgPath: '/assets/ksionszki/book.svg',
    count: 1,
    maxCount: 5,
  };

  tempBooks = [this.testowy, this.testowy2, this.testowy3, this.testowy4];
  cartEmpty: boolean = false;
  constructor(private repo: BookRepository, private cartService: CartService) { }

  ngOnInit(): void {
    this.loadBooks();
    this.calculatePrice();
  }

  // localstorage holds book.id array
  public loadBooks() {
    this.booksInCart = [];
    let bookIDs: number[] = this.cartService.getBookIDs();

    if (this.cartService.isEmpty()) {
      this.cartEmpty = true;
      return;
    }

    bookIDs.forEach((ID) => {
      let book = this.repo.getBook(ID) as any;
      if (book) {
        if (this.booksInCart.find(b => b.id == ID)) {
          this.booksInCart.find(b => b.id == ID).count++;
        } else {
          book.count = 1;
          this.booksInCart.push(book);
        }
      }
    });
    this.cartEmpty = false;
  }

  public deleteFromCart(bookId: number) {
    this.cartService.deleteFromCart(bookId);
  }

  public calculatePrice() {
    this.priceAll = 0;
    this.booksInCart.forEach((element) => {
      this.priceAll +=
        Math.round((element.price - element.price * element.discount) * 100) /
        100 * element.count;
    });

    if (this.priceAll > 0) {
      this.priceAllFormated = this.priceAll.toFixed(2);
    } else {
      this.priceAllFormated = "0.00";
    }
  }

  public changeAmmount(id: number, increase: boolean) {
    if (increase) {
      this.booksInCart[id].count++;
      this.cartService.addToCart(this.booksInCart[id].id)
    }
    else if (!increase && this.booksInCart[id].count >= 1) {
      this.booksInCart[id].count--;
      this.cartService.deleteFromCart(this.booksInCart[id].id);
      if (this.booksInCart[id].count == 0) {
        this.booksInCart.splice(id, 1);
      }
    }

    this.loadBooks();
    this.calculatePrice();
  }
}
