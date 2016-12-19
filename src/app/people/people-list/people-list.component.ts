import { Component, OnInit } from '@angular/core';

import { PeopleService } from '../shared/people.service';
import { Person } from '../shared/person.model';

@Component({
  selector: 'crm-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  people: Person[];

  constructor(public peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.getPeople()
      .then((data: Person[]) => {
        this.people = data;
      });
  }

}
