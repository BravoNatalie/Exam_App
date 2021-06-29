import { createContext, ReactNode, useContext, useState } from 'react';

import { api } from '../services/api';

type Alternative = {
  id: string,
  questionId: string,
  description: string,
  isCorrect: boolean
}

type Question = {
  id: string,
  examId: string,
  description: string,
  orderNumber: number,
  alternatives: Array<Alternative>
}

type Exam = {
  id: string;
  title: string;
  subjects: Array<string>;
  description: string;
  publishedAt: string;
  questions: Array<Question>;
}

type ExamContextData = {
  examList: Array<Exam>;
  lastExamId: number;
  lastQuestionId: number;
  lastAlternativeId: number;
  setExams: (exam: Array<Exam>) => void;
  setLastExamId: (id: number) => void;
  setLastQuestionId: (id: number) => void;
  setLastAlternativeId: (id: number) => void;
  getExam: (examId: string) => Exam;
  getQuestions: (examId: string) => Array<Question>;
  getAlternatives: (questionId: string) => Array<Alternative>;
  edit: (exam: Exam) => void;
  remove: (examId: string) => void;
  create: (data: Object) => void;
}

export const ExamContext = createContext( {} as ExamContextData );

type ExamContextProviderProps ={
  children: ReactNode;
}

export function ExamContextProvider({ children }: ExamContextProviderProps) {
  const [examList, setExamList] = useState([]);
  const [lastExamId, setLastExamId] = useState(0);
  const [lastQuestionId, setLastQuestionId] = useState(0);
  const [lastAlternativeId, setLastAlternativeId] = useState(0);
 
  function setExams(exams: Array<Exam>){
    setExamList(exams);

    if(exams.length > 0){
      const lastExamID = exams[exams.length - 1].id;
      const lastQuestionID = exams[exams.length - 1].questions.slice(-1)[0].id;
      console.log(lastQuestionID);
      const lastAlternativeID = exams[exams.length - 1].questions.slice(-1)[0].alternatives.slice(-1)[0].id;
      setLastExamId(Number(lastExamID));
      setLastQuestionId(Number(lastQuestionID));
      setLastAlternativeId(Number(lastAlternativeID));
    }
  }

  function getExam(examId: string){
    return examList.find( exam => exam.id === examId);
  }

  function getQuestions(examId: string) {
    const questions = examList.find( exam => exam.id === examId).questions;
    return questions;
  }

  function getAlternatives(questionId: string){
    const alternatives = examList.find( exam => {
      return exam.questions.find(question => question.id === questionId);
    }).alternatives;
    return alternatives;
  }

  function create(data: Exam) {
    const {questions, ...onlyExam} = data;

    api
    .post('/exams', onlyExam)
    .then( () => {
        for (const question of data.questions) {
          const {alternatives, ...onlyQuestions} = question;
          api
          .post('/questions', onlyQuestions)
          .then( () => {
            for (const alternative of question.alternatives) {
              console.log('alternative ' + alternative)
              api
              .post('/alternatives', alternative)
              .then(() => {
                console.log("Exam Created!");
              })
            }
          })
        }
      }
    )
    .catch ( (err) => {
      alert("Error on creating Exam! " + err)
    })
  } 


  function edit(exam: Exam) {
    const examId = exam.id;
    const questionsIdList = exam.questions.map(question => question.id);
    const alternativeIdList = exam.questions.map(question => {
      return question.alternatives.map(alternative => alternative.id)
    });
  } 

  async function removeExam(path: string){
    try{
      await api.delete(path);
      alert("Removed!")
    } catch (err) {
      alert("Error on remove exam! ")
    }
  }

  function remove(examId: string){
    removeExam(`/exams/${examId}`);
  }

  return (
    <ExamContext.Provider 
      value={{ 
        examList,
        setExams,
        lastExamId,
        setLastExamId,
        lastQuestionId,
        setLastQuestionId,
        lastAlternativeId,
        setLastAlternativeId,
        getExam,
        getQuestions,
        getAlternatives,
        create,
        edit,
        remove
        }}
      >
      {children}
    </ExamContext.Provider>
  )
}

export const useExam = () => {
  return useContext(ExamContext);
}