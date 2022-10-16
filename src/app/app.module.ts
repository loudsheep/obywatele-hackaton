import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookRepository } from './book.repository.service';
import { TestComponent } from './test/test.component';
import { StaticDataSource } from './static.datasource.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [BookRepository, StaticDataSource],
  bootstrap: [AppComponent]
})
export class AppModule { }
