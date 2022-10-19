import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

  private cartEmpty: boolean = true;
  private cartBookID: number[] = [];

  constructor() { 
    this.loadCartFromLocalStorage();
  }

  public getBookIDs(): number[]{
    return this.cartBookID;
  }

  public isEmpty(): boolean {
    return this.cartBookID.length == 0;
  }

  public cartLength(): number{
    return this.cartBookID.length;
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
      this.cartEmpty = true;
      return;
    }
    this.cartEmpty = false;

  }
  
  private saveCartToLocalStorage() {
    let json = JSON.stringify(this.cartBookID);
    console.log(json);
    try {
      localStorage.setItem('cart', json);
    } catch (e) {
      // sometimes throws QuotaExceededError
      console.log(e);
    }
  }

  // TODO: Add a method for adding books
  // Use case scenario: in main place for browsing books 

}
