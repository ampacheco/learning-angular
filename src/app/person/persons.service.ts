import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PersonService {

  personChanged = new Subject<string []>();
  persons: string [];
  constructor(private httpClient: HttpClient) {}

  fetchPersons() {
    this.httpClient.get<any>('api/people')
      .subscribe( restData => {
         console.log(restData);
      });
  }

  addPerson(theName: string) {
    this.persons.push(theName);
    this.personChanged.next(this.persons);
  }

  removePerson(theName: string) {

    this.persons = this.persons.filter( person => {
      return person !== theName;
    });
    this.personChanged.next(this.persons);
  }

}
