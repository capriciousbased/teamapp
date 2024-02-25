import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  newMemberName = '';
  members: string[] = [];
  onInput(member: string) {
    this.newMemberName = member;
    console.log(this.newMemberName);
  }
  addMember() {
    this.members.push(this.newMemberName);
    console.log(this.members);
  }
}
