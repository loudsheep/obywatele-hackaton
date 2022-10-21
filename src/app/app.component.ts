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
    this.strzalka1.addEventListener('click', this.showFoot);
    this.strzalka2.addEventListener('click', this.showFoot);
  }

  strzalka1 = <HTMLElement>document.getElementById('f_arrow');
  strzalka2 = <HTMLElement>document.getElementById('u_arrow');
  showFoot(){
    let strzalka1 = <HTMLElement>document.getElementById('f_arrow');
    let strzalka2 = <HTMLElement>document.getElementById('u_arrow');
    let stupka = <HTMLElement>document.getElementById('stupka');
    if(stupka.classList.contains('hidden')){
      stupka.classList.remove('hidden');
      strzalka1.classList.remove('hidden');
      strzalka2.classList.add('hidden');
    }
    else{
      stupka.classList.add('hidden');
      strzalka1.classList.add('hidden');
      strzalka2.classList.remove('hidden');
    }

  }
  
}
