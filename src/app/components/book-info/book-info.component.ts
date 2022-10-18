import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Book } from 'src/app/services/book';
import { BookRepository } from 'src/app/services/book.repository.service';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private repo: BookRepository) { }

  bookId: number = -1;
  book: Book | any;
  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.bookId = Number(paramMap.get('id')) ?? -1;
    });

    console.log(this.bookId);

    let search = this.repo.getBook(this.bookId);
    if (search) {
      this.book = search;
    } else {
      this.router.navigate(['notfound'])
    }
  }

}
