import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../shared/person.model';

@Component({
  selector: 'crm-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  @Input()
  person: Person;

  ngOnInit() {
  }

  personSelected(person: Person): void {

  }

}
