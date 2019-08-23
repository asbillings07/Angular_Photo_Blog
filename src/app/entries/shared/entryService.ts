import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Entry } from './entry.model';
@Injectable()
export class EntryService {
  constructor(private http: Http) {}

  addComment(entryid: number, comment: { name: string; comment: string }) {
    return this.http
      .post(`/app/entries/${entryid}/comments`, comment)
      .toPromise();
  }

  getEntries(): Promise<Entry[]> {
    // generic promise
    return this.http
      .get('/app/entries')
      .toPromise()
      .then(res => res.json().data as Entry[]);
  }
}
