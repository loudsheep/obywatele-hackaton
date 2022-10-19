import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookRepository } from './services/book.repository.service';
import { TestComponent } from './test/test.component';
import { StaticDataSource } from './services/static.datasource.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CartComponent } from './components/cart/cart.component';
import { BookInfoComponent } from './components/book-info/book-info.component';
import { HomeComponent } from './components/home/home.component';
import { BrowseComponent } from './components/browse/browse.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PageNotFoundComponent,
    CartComponent,
    BookInfoComponent,
    HomeComponent,
    BrowseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [BookRepository, StaticDataSource],
  bootstrap: [AppComponent],
  exports: [AppRoutingModule]
})
export class AppModule { }
