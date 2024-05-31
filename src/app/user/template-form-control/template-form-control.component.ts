import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-template-form-control',
  templateUrl: './template-form-control.component.html',
  styleUrls: ['./template-form-control.component.css']
})
export class TemplateFormControlComponent {

    textInput :string = '';
    numericInput :  number = 0;
    stringInput : string = '';
    numericSelect : number = 0;
    checkboxInput :  boolean = false;
    radioInput : number | null = null;

 
    selectOptions : any[] = [
      {text:'Option One' , value : 'one'},
      {text:'Option Two' , value : 2}
    ];

    constructor(){
      //dependency injection
    };

    // ngOnInit is a life cycle hook called by Angular to indicate that Angular is done creating the component.
    // when Angular calls ngOnInit it has finished creating a component DOM, injected all required dependencies through constructor and processed input bindings
    ngOnInit():void{}



    getType(value : any){
      if(value === null || value === undefined) return '';
      console.log('ns' , this.numericSelect);
      return typeof value;
    }

}
