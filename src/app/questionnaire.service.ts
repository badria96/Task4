import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuestionnaireService {
  private userAnswers: any[] = [];

  storeUserAnswer(answer: any) {
    this.userAnswers.push(answer);
  }

  getUserAnswers() {
    return this.userAnswers;
  }

  clearUserAnswers() {
    this.userAnswers = [];
  }
}
