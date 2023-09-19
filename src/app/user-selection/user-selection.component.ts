import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.css'],
})
export class UserSelectionComponent {
  selectedUser: string = '';

  constructor(private router: Router) {}

  startQuestionnaire() {
    this.router.navigate(['/questionnaire'], { queryParams: { user: this.selectedUser } });
  }
}
