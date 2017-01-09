import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
	moduleId: module.id, 
	selector:"bs-favorite",
	templateUrl: "favorite.component.html"
})


//ejemplo de child component
export class FavoriteComponent 
{
	fave: boolean = false;

	@Input() favorite: String;
	@Input() reviews: number; //valor que se optiene del parent
	@Output() favoriteClicked: EventEmitter<String> = new EventEmitter<String>();

	onClick(): void
	{
		this.favoriteClicked.emit(`The favorite ${this.favorite} was saved`);
		this.fave = !this.fave;
	}

	isSelected(fave:boolean) :boolean
	{
		if(!fave || !this.fave)
			return false;

		if(fave)
			return true;
	}
}