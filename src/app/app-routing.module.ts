import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookInfoComponent } from './components/book-info/book-info.component';
import { CartComponent } from './components/cart/cart.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './components/home/home.component';
import { BrowseComponent } from './components/browse/browse.component';
import { FlipbookComponent } from './components/flipbook/flipbook.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: "book/:id", component: BookInfoComponent },
  { path: "test", component: TestComponent },
  { path: "cart", component: CartComponent },
  { path: "home", component: FlipbookComponent },
  { path: "search", component: BrowseComponent },
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "notfound", component: PageNotFoundComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
