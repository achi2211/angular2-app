import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {IBook} from './book';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class BookService 
{
	constructor(private _http: Http){}

	getBooks(): Observable<IBook[]> 
	{
		return this._http
			.get('api/books/books.json')
			//.get('https://s7qkjdf5b0.execute-api.us-west-2.amazonaws.com/dev/workouts')
        	.map((response: Response) => <IBook[]> response.json())
        	.do(data => console.log("respuesta: " + data.toString()))
        	.catch(this.handleError);
	}

	private handleError(error: Response) {
    	console.error(error);
    	let message = `Error status code ${error.status} at ${error.url}`;
    	return Observable.throw(message);
  	}

	//ejemplo simple 
	// getBooks(): IBook[]
	// {
	// 	return [{
	//     bookAuthor: "Tom Jones",
	//     bookTitle: "War and Peace 2",
	//     bookPrice: 29.95,
	//     bookDescription: "Book of historical fiction",
	//     publishedOn: new Date('11/22/1984'), //objeto nativo de js
	//     bookReviews: 15,
	//     inStock: "yes",
	// 	    bookImageUrl: "app/assets/images/656.jpg"
	//   	},
	//   	{
	// 	    bookAuthor: "Mike Jones",
	// 	    bookTitle: "War and Peace 3",
	// 	    bookPrice: 19.95,
	// 	    bookDescription: "Book of historical fiction",
	// 	    publishedOn: new Date('11/22/1984'), //objeto nativo de js
	// 	    bookReviews: 18,
	// 	    inStock: "yes",
	// 	    bookImageUrl: "app/assets/images/656.jpg"
	//   	}];
	// }
}

