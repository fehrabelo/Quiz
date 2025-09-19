export interface QuizOption {
    index?: number,
    value?: number
}


export interface Question {
  question: string;
  options: number[];
  correctAnswer: number;
  selectedAnswer?: number | null;
}