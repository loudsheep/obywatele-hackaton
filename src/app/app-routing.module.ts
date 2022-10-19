import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookInfoComponent } from './components/book-info/book-info.component';
import { CartComponent } from './components/cart/cart.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './components/home/home.component';
import { BrowseComponent } from './components/browse/browse.component';

const routes: Routes = [
  { path: "book/:id", component: BookInfoComponent },
  { path: "test", component: TestComponent },
  { path: "cart", component: CartComponent },
  { path: "home", component: HomeComponent },
  { path: "search", component: BrowseComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "notfound", component: PageNotFoundComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
