import { Injectable } from '@angular/core';
import { from, Observable} from 'rxjs';
import { Book } from './book';

// TODO: Replace this with actually loading from database
@Injectable()
export class StaticDataSource {
  private books: Book[] = [
    {id: 0, author:"Some author test", name: "Efektywne programowanie w języku Java",
     category: "podręczniki", description: "Podręcznik javy", price: 54.99, discount:0.15, imgPath: ["/assets/ksionszki/book.svg"]},
    {id: 1, author:"Some author test", name: "Efektywne programowanie w języku C++",
     category: "podręcznik", description: "Podręcznik C++", price: 44.99, discount:0.1, imgPath: ["/assets/ksionszki/book.svg"]},
  ]
  getBooks(): Observable<Book[]>{
    return from([this.books]);
  }
}
