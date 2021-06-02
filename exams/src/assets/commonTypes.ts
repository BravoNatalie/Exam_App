export type Alternative = {
  id: string,
  questionId: string,
  description: string,
  isCorrect: boolean
}

export type Question = {
  id: string,
  examId: string,
  description: string,
  orderNumber: number,
  alternatives: Array<Alternative>
}

export type Exam = {
  id: string;
  title: string;
  subjects: Array<string>;
  description: string;
  publishedAt: string;
  questions: Array<Question>;
}