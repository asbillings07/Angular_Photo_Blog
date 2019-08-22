import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Entry } from './entry.model';
@Injectable()
export class EntryService {
  constructor(private http: Http) {}

  getEntries(): Promise<Entry[]> {
    // generic promise
    return this.http
      .get('/app/entries')
      .toPromise()
      .then(res => res.json().data as Entry[]);
  }
}
