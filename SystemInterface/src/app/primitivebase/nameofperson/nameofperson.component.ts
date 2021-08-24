import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-nameofperson',
	templateUrl: './nameofperson.component.html',
	styleUrls: ['./nameofperson.component.css']
})
export class NameofpersonComponent implements OnInit {

    usertitleclass = 'dataset:UserTitle';
    classtitle = 'Title: ';

    constructor() { }

	@Input() name: Observable<any>;

	ngOnInit(): void {
	}

}
