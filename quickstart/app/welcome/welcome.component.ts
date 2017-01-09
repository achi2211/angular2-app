
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'bs-welcome',                  //selector
  templateUrl: `welcome.component.html`,  //html file
  styleUrls: ['welcome.component.css']    //css file
})


export class WelcomeComponent  
{ 
	pageTitle:string = "Welcome";
}