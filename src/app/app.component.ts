import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'obywatele-hackaton';

  constructor(private cartService: CartService){}

  cartItemCount: number = 0;
  ngOnInit(): void {
    this.cartItemCount = this.cartService.cartLength();
  }
  
}
