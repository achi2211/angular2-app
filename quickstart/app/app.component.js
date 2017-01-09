// original first component
// import { Component } from '@angular/core';
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
// @Component({
//   selector: 'my-app',
//   template: `<h1>Hello!!! {{name}}</h1>`,
// })
// export class AppComponent  { name = 'Angular'; }
//my component
var core_1 = require('@angular/core');
//este es el Decorator
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = "Dev Book Store";
        this.searchBox = "";
    }
    AppComponent.prototype.showBook = function () {
        //la logica del metodo va aqui
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bs-app',
            // template: `<h1>{{pageTitle}}</h1> 
            // 			 <div>App Component Test</div>
            // 			 <bs-welcome></bs-welcome>`,  // se agrega el template - codigo viejo
            templateUrl: 'app.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map