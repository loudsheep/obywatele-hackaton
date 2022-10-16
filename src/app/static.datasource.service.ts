import { Injectable } from '@angular/core';
import { from, Observable} from 'rxjs';
import { Book } from './book';

// TODO: Replace this with actually loading from database
@Injectable()
export class StaticDataSource {
  private books: Book[] = [
    {id: 0, name: "Efektywne programowanie w języku Java",
     category: "podręcznik", description: "Podręcznik javy", price: 54.99, imgPath: []},
    {id: 1, name: "Efektywne programowanie w języku C++",
     category: "podręcznik", description: "Podręcznik C++", price: 44.99, imgPath: []},
  ]
  getBooks(): Observable<Book[]>{
    return from([this.books]);
  }
}
