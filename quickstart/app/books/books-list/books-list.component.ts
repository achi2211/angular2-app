import {Component, OnInit} from '@angular/core'
import { IBook } from '../book';
import { BookService} from '../book.service';

@Component({
	moduleId: module.id,
	selector: 'bs-books-list',
	templateUrl: 'books-list.component.html'
})

export class BooksListComponent implements OnInit
{

	books: IBook[];
	favoriteMessage: string = '';
	showMessage: string = 'test';
	showImage: boolean = true;
	booksInStock: number = 2;
	imageWidth: number = 100;
	errorMessage: string = "";

	constructor(private _bookService:BookService)
	{
		//this.books = _bookService.getBooks();
	}

	//por convención los servicios se setean en ngOnInit!
	ngOnInit() 
	{
		this.getBooks();
		
	}

	getBooks()
	{
		this._bookService.getBooks()
		.subscribe(
			books=>this.books = books,
			error=> this.errorMessage= <any>error
		);
	}

	// ngOnChanges()
	// {

	// }

	// books:any[] = [{
	//     bookAuthor: "Tom Jones",
	//     bookTitle: "War and Peace 2",
	//     bookPrice: 29.95,
	//     bookDescription: "Book of historical fiction",
	//     publishedOn: new Date('11/22/1984'), //objeto nativo de js
	//     bookReviews: 15,
	//     inStock: "yes",
	//     bookImageUrl: "app/assets/images/656.jpg"
 //  	},
 //  	{
	//     bookAuthor: "Mike Jones",
	//     bookTitle: "War and Peace 3",
	//     bookPrice: 19.95,
	//     bookDescription: "Book of historical fiction",
	//     publishedOn: new Date('11/22/1984'), //objeto nativo de js
	//     bookReviews: 18,
	//     inStock: "yes",
	//     bookImageUrl: "app/assets/images/656.jpg"
 //  	}
 //  	];

	toggleImage() : void {
		this.showImage = !this.showImage;
	}

	// onNotifyClicked(message:string):void
	// {
	// 	this.showMessage = message;
	// }

		onFavoriteClicked(message:string):void
	{
		this.favoriteMessage = message;
	}


}