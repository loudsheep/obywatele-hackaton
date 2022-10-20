import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

  private cartBookID: number[] = [];

  constructor() {
    this.loadCartFromLocalStorage();
  }

  public getBookIDs(): number[] {
    return this.cartBookID;
  }

  public isEmpty(): boolean {
    return this.cartBookID.length == 0;
  }

  public cartLength(): number {
    return this.cartBookID.length;
  }

  // TODO: Check if book exists, then add
  public addToCart(bookID: number) {
    this.cartBookID.push(bookID);
    this.saveCartToLocalStorage();
  }

  public deleteFromCart(bookID: number) {
    let idx = this.cartBookID.findIndex(id => id == bookID);
    if (idx >= 0) {
      this.cartBookID.splice(idx, 1);
    }
    this.saveCartToLocalStorage();
  }

  private loadCartFromLocalStorage() {
    // yay, localstorage has some items, maybe
    this.cartBookID = JSON.parse(localStorage.getItem('cart') ?? '[]');

    if (this.cartBookID.length == 0) {
      return;
    }
  }

  private saveCartToLocalStorage() {
    let json = JSON.stringify(this.cartBookID);
    try {
      localStorage.setItem('cart', json);
    } catch (e) {
      // sometimes throws QuotaExceededError
      console.log(e);
    }
  }
}
