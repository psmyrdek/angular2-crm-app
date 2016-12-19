import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';

import { PeopleComponent } from './people.component';
import { PeopleListComponent } from './people-list/people-list.component';

import { PeopleService } from './shared/people.service';
import { PersonComponent } from './person/person.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PeopleComponent,
        PeopleListComponent,
        PersonComponent
    ],
    providers: [
        PeopleService
    ],
    exports: [
        PeopleComponent
    ]
})
export class PeopleModule { }
