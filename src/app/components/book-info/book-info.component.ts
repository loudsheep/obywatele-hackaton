import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Book } from 'src/app/services/book';
import { BookRepository } from 'src/app/services/book.repository.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private repo: BookRepository, private cart: CartService) { }

  bookId: number = -1;
  book: Book | any;

  ngOnInit(): void {
    // NOTE: supply parameters in URL in form of www.domain.com/route/param1/param2 etc.
    // doesn't work with old fashion GET parameters like ?param1=&param2=
    this.route.paramMap.subscribe(paramMap => {
      this.bookId = Number(paramMap.get('id')) ?? -1;
    });

    let search = this.repo.getBook(this.bookId);
    if (search) {
      this.book = search;
    } else {
      this.router.navigate(['notfound'])
    }
  }

  addToCart() {
    this.cart.addToCart(this.bookId);
  }

  show(){
    let pdf = <HTMLElement>document.getElementById('pdf_container');
    pdf.classList.remove('hidden');
  }
  hide(){
    let pdf = <HTMLElement>document.getElementById('pdf_container');
    pdf.classList.add('hidden');
  }

}
