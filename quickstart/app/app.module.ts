import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { AppComponent }  from './app.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { HighlightDirective } from './shared/highlight.directive';
import { FavoriteComponent } from './favorites/favorite.component';
import { BookService } from './books/book.service';
//importar el componente Welcome
//import { WelcomeComponent }  from './welcome/welcome.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
 // declarations: [ AppComponent, WelcomeComponent],
  declarations: [ AppComponent, BooksListComponent, HighlightDirective, FavoriteComponent],
  bootstrap:    [ AppComponent ], 
  providers: 	[ BookService]
})
export class AppModule { }
