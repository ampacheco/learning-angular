import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonService } from './persons.service';
import { Subscription } from 'rxjs';


@Component({
  selector : 'app-person',
  templateUrl: './person.component.html'
})

export class PersonComponent implements OnInit, OnDestroy {

  private personSubscription: Subscription;
  personList: string[];

  constructor(private thePersonService: PersonService) {
  }

  ngOnInit() {
    this.thePersonService.fetchPersons();
    this.personSubscription = this.thePersonService.personChanged.subscribe( persons => {
      this.personList = persons;
    });
  }

  ngOnDestroy() {
    this.personSubscription.unsubscribe();
  }

  onRemovePerson(thePersonName: string) {
    console.log( thePersonName + ' has been deleted' );
    this.thePersonService.removePerson(thePersonName);
    console.log(this.personList);
  }

}
