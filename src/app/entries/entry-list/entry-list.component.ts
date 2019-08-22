import { Entry } from './../shared/entry.model';
import { EntryService } from './../shared/entryService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry-list',
  templateUrl: 'entry-list.component.html',
  styleUrls: ['entry-list.component.css'],
})
export class EntryListComponent implements OnInit {
  entries: Entry[];

  // private makes it avaliable only within the class
  constructor(private entryService: EntryService) {}

  // Angular lifecycle method
  ngOnInit() {
    this.entryService.getEntries().then(entries => (this.entries = entries));
  }
}
