import { Component } from '@angular/core';

// component decorator
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  emoji = ['😀 ', ' 🤩 ', ' 🤔 ', ' 😎 '];
  activeEmoji: string;
  changeEmoji() {
      this.activeEmoji = this.emoji[Math.floor(Math.random() * this.emoji.length)]
  }
}
