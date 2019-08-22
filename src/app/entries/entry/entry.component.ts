import { Entry } from './../shared/entry.model';
import { Component, Input } from '@angular/core';

// this marks our class as a Angular Component
@Component({
  selector: 'app-entry',
  templateUrl: 'entry.component.html',
  styleUrls: ['entry.component.css'],
})
export class EntryComponent {
  // applied input decorator so it an recieve data from the entry list
  @Input() entry: Entry;
}
