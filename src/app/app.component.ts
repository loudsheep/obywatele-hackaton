import { Component, OnInit } from '@angular/core';
import { CartComponent } from './components/cart/cart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'obywatele-hackaton';

  cartItemCount: number = 0;
  ngOnInit(): void {
    this.cartItemCount = CartComponent.getCartItemCount();
  }
}
