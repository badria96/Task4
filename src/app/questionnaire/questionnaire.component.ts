import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { QuestionnaireService } from '../questionnaire.service';


@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css'],
})
export class QuestionnaireComponent {
  questions = [
    {
      question: 'Which of these elements in HTML can be used for making text bold?',
      options: ['<a>', '<pre>', '<br>', '<b>'],
      answer: '<b>',
    },
    {
      question: 'Which tag do we use in HTML for inserting a line-break?',
      options: ['<a>', '<br>', '<b>', '<pre>'],
      answer: '<br>',
    },
    {
      question: 'How to create a hyperlink in HTML?',
      options: [' <a link = “www.thinkandlearn.com”> thinkandlearn.com </a>', '<a> www.thinkandlearn.com <thinkandlearn.com /a>', '<a href = “www.thinkandlearn.com”> thinkandlearn.com </a>', ' <a url = “www.thinkandlearn.com” thinkandlearn.com /a>'],
      answer: '<a href = “www.thinkandlearn.com”> thinkandlearn.com </a>',
    },
    {
      question: 'In HTML, how do we insert an image?',
      options: ['<img src = “jtp.png” />', '<img href = “jtp.png” />', '<img link = “jtp.png” />', '<img url = “jtp.png” />'],
      answer: '<img src = “jtp.png” />',
    },
    {
      question: 'Which tag do we use to define the options present in the drop-down selection lists?',
      options: ['<list>', '<option>', '<dropdown>', '<select>'],
      answer: '<option>',
    },
  ];

  currentQuestion = 0;
  selectedOptions: string[] = new Array(this.questions.length);

  userName: string = ''; 
  userScore: number = 0; 

  constructor(private router: Router,private route: ActivatedRoute, private questionnaireService: QuestionnaireService) {
    this.route.queryParams.subscribe((params) => {
      this.userName = params['selectedUser'] ; 
    });
  }
  submitButtonDisabled = true;
  showUserDetails=false;

  enableSubmitButton() {
    this.submitButtonDisabled = false;
  }

  nextQuestion() {
    this.questionnaireService.storeUserAnswer(this.selectedOptions[this.currentQuestion]);
    this.currentQuestion++;
    if (this.currentQuestion === this.questions.length - 1) {
      this.enableSubmitButton();
    }
   
  }

  submit() {
    this.questionnaireService.storeUserAnswer(this.selectedOptions[this.currentQuestion]);
    const userAnswers = this.questionnaireService.getUserAnswers();
    this.userScore = this.calculateScore(userAnswers);
    this.showUserDetails = true;
    this.questionnaireService.clearUserAnswers();
  }

  private calculateScore(userAnswers: any[]): number {
    const correctAnswers = ['<b>', '<br>', '<a href = “www.thinkandlearn.com”> thinkandlearn.com </a>', '<img src = “jtp.png” />', '<option>'];
    let score = -1;
    for (let i = 0; i < userAnswers.length; i++) {
      if (userAnswers[i] === correctAnswers[i]) {
        score++;
      }
    }
    return score;
  }
}
