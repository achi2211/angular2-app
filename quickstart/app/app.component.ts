// original first component
// import { Component } from '@angular/core';

// @Component({
//   selector: 'my-app',
//   template: `<h1>Hello!!! {{name}}</h1>`,
// })
// export class AppComponent  { name = 'Angular'; }

//my component

import { Component } from '@angular/core';

//este es el Decorator
@Component({
  moduleId: module.id,  // se usa cuando hay un templateURL (CREO)
  selector: 'bs-app',
  // template: `<h1>{{pageTitle}}</h1> 
  // 			 <div>App Component Test</div>
  // 			 <bs-welcome></bs-welcome>`,  // se agrega el template - codigo viejo
  templateUrl: 'app.component.html'
})

//clase del componente
export class AppComponent  
{ 
	pageTitle:string = "Dev Book Store";

	searchBox: string = "";

	showBook():void
	{
		//la logica del metodo va aqui
	}
}

