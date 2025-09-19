import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Question } from '../../shared/models/quiz';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-wrapper',
  imports: [RouterModule,FormsModule ],
  templateUrl: './card-wrapper.component.html',
  styleUrl: './card-wrapper.component.scss',
  standalone: true
})
export class CardWrapperComponent {
   currentStep = 0;

  radioButtonData: Question[] = [
    { question: 'Quanto é a soma de 1 + 2?', options: [2, 3, 4, 5], correctAnswer: 3 },
    { question: 'Quanto é a soma de 2 + 2?', options: [3, 2, 5, 4], correctAnswer: 4 },
  ];

  nextStep() {
    if (this.currentStep < this.radioButtonData.length) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  getScore(): number {
    const total = this.radioButtonData.length;
    const correct = this.radioButtonData.filter(q => q.selectedAnswer === q.correctAnswer).length;
    return (correct / total) * 100;
  }
}
