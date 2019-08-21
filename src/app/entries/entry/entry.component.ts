import { Component } from '@angular/core';

// this marks our class as a Angular Component
@Component({
  selector: 'app-entry',
  templateUrl: 'entry.component.html',
  styleUrls: ['entry.component.css'],
})
export class EntryComponent {
  title: string = 'My First Photo';
  photo: string = 'http://placehold.it/800x500?text=Angular Basics';
  description: string = 'A Description of my first Photo';
  comments: any[] = [
    {
      name: 'John',
      comment: 'A Comment',
    },
    {
      name: 'Jim',
      comment: 'A Comment',
    },
    {
      name: 'Sally',
      comment: 'A Comment',
    },
    {
      name: 'Bob',
      comment: 'A Comment',
    },
    {
      name: 'Tim',
      comment: 'A Comment',
    },
  ];
}
