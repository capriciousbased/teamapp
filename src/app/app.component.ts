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
  errorMessage = '';

  onInput(member: string) {
    this.newMemberName = member;
  }

  addMember() {
    if (!this.newMemberName) {
      this.errorMessage = 'Name cannot be empty!';
      return;
    }
    this.members.push(this.newMemberName);
    this.newMemberName = '';
    this.errorMessage = '';
  }
}
