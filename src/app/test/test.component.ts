import { Component, OnInit } from '@angular/core';
import { Book } from '../services/book';
import { BookRepository } from '../services/book.repository.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  books: Book[] = [];
  constructor(private repo: BookRepository) {
    this.books = repo.getBooks();
  }

  ngOnInit(): void {
  }

}
