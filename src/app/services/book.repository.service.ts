import { Injectable } from '@angular/core';
import { Book } from './book';
import { StaticDataSource } from './static.datasource.service';

@Injectable()
export class BookRepository {
  private books: Book[] = [];
  private categories: string[] = [];
  constructor(private dataSource: StaticDataSource) { 
    dataSource.getBooks().subscribe(data => {
      this.books = data;
      this.categories = data.map(b => b.category).filter((c, index, array) => index == array.indexOf(c));
    })
  }

  getBooks(): Book[]{
    return this.books;
  }

  getBook(id: number): Book | null{
    return this.books.find(b => b.id == id) ?? null;
  }

  getCategories(): string[]{
    return this.categories;
  } 

  // TODO: add other features like returning books in price range

}
