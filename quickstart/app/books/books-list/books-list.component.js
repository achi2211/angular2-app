"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var book_service_1 = require('../book.service');
var BooksListComponent = (function () {
    function BooksListComponent(_bookService) {
        this._bookService = _bookService;
        this.favoriteMessage = '';
        this.showMessage = 'test';
        this.showImage = true;
        this.booksInStock = 2;
        this.imageWidth = 100;
        this.errorMessage = "";
        //this.books = _bookService.getBooks();
    }
    //por convención los servicios se setean en ngOnInit!
    BooksListComponent.prototype.ngOnInit = function () {
        this.getBooks();
    };
    BooksListComponent.prototype.getBooks = function () {
        var _this = this;
        this._bookService.getBooks()
            .subscribe(function (books) { return _this.books = books; }, function (error) { return _this.errorMessage = error; });
    };
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
    BooksListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    // onNotifyClicked(message:string):void
    // {
    // 	this.showMessage = message;
    // }
    BooksListComponent.prototype.onFavoriteClicked = function (message) {
        this.favoriteMessage = message;
    };
    BooksListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bs-books-list',
            templateUrl: 'books-list.component.html'
        }), 
        __metadata('design:paramtypes', [book_service_1.BookService])
    ], BooksListComponent);
    return BooksListComponent;
}());
exports.BooksListComponent = BooksListComponent;
//# sourceMappingURL=books-list.component.js.map