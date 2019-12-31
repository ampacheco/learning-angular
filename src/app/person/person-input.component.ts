import { Component } from '@angular/core';
import { templateSourceUrl, CssSelector } from '@angular/compiler';
import { PersonService } from './persons.service';

@Component({
  selector : 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})

export class PersonInputComponent {

  thePersonName = '';

  constructor(private thePersonService: PersonService) {
  }

  onIngresarPersona() {
    console.log( this.thePersonName +  ' has been Created.' );
    this.thePersonService.addPerson(this.thePersonName);
    this.thePersonName = '';
  }
}
