import { Component, OnInit, Input } from '@angular/core';

interface classification {
    classname: string;
    label: string;
}

@Component({
  selector: 'app-classificationcomponent',
  templateUrl: './classificationcomponent.component.html',
  styleUrls: ['./classificationcomponent.component.css']
})
export class ClassificationcomponentComponent    implements OnInit {
  
	@Input() selected: string;
    @Input() classificationname: string;
    @Input() classtitle: string;
	
	classifications: classification[];
  constructor() {
}



   ngOnInit(): void {
       this.classifications = this.getClassifications();
/*
	   this.classifications = [
       {classname: 'Doctor', label: 'Dr.'},
       {classname: 'Miss', label: 'Miss'},
       {classname: 'Mister', label: 'Mr.'},
       {classname: 'Ms', label: 'Ms.'},
       {classname: 'Eur_Ing', label: 'Eur Ing'}
     ];
*/
}

 getClassifications(): classification[] {
     const choices = [
       {classname: 'Doctor', label: 'Dr.'},
       {classname: 'Miss', label: 'Miss'},
       {classname: 'Mister', label: 'Mr.'},
       {classname: 'Ms', label: 'Ms.'},
       {classname: 'Eur_Ing', label: 'Eur Ing'}
     ];
     return choices;
}

}
