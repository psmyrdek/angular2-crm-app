import { Injectable } from '@angular/core';

import { Person } from './person.model';

@Injectable()
export class PeopleService {

  private people: Person[] = [
    new Person(1, 'Jan', 'Kowalski', 'Java Senior Engineer', 'Cracow'),
    new Person(2, 'Marek', 'Nowak', 'Architect', 'Warsaw'),
    new Person(3, 'Tomasz', 'Kwiatkowski', 'Web Designer', 'Stockholm')
  ];

  public getPeople(): Promise<Person[]> {

    return Promise.resolve(this.people);

  }

}
