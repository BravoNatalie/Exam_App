import { GetServerSideProps } from 'next';
import { useState, FormEvent } from 'react';
import Router from 'next/router';
import Head from 'next/head';

import { Exam, Question, Alternative } from '../assets/commonTypes';

import { Input } from '../components/Input';
import { TextArea } from '../components/TextArea';
import { Question as QuestionComponent } from '../components/Question';
import { Answer } from '../components/Answer';

import { ExamFormContainer } from '../styles/pages/ExamFormContainer';
import { QuestionContainer } from '../components/Question/QuestionContainer';

import { useExam } from '../contexts/ExamContext';

type ExamFormProps = {
  id: string;
}

export default function ExamForm({ id }: ExamFormProps) {
  const { 
    create,
    getExam,
    lastExamId,
    lastQuestionId,
    lastAlternativeId,
  } = useExam();

  const editExam = getExam(id);
    console.log(editExam)
  if(id){
    //const editExam = getExam(id);
    console.log("passou")

  } else {

  }

  const newLastExamId = lastExamId + 1;
  const [newLastQuestionId, setNewLastQuestionId] = useState(lastQuestionId + 1);
  const [newLastAlternativeId, setNewLastAlternativeId] = useState(lastAlternativeId + 1);

  //setLastExamId(lastExamId + 1)
  const [title, setTitle] = useState('');
  const [subjects, setSubjects] = useState('');
  const [description, setDescription] = useState('');

  //setLastQuestionId(lastQuestionId + 1);
  const [questions, setQuestions] = useState([
    { id: newLastQuestionId,
      examId: newLastExamId,
      description: '',
      orderNumber: 1,
      alternatives: [
        {id: newLastAlternativeId,
          questionId: newLastQuestionId,
          description: '...',
          isCorrect: false}
      ]
    }]);

  function addNewQuestionItem(id: number) {
    setQuestions([
      ...questions,
      { id: id,
        examId: newLastExamId,
        description: '',
        orderNumber: questions.length + 1,
        alternatives: []
      }]);
  }
  
  function addNewAlternativeItem(questionID: number, id: number) {
    const updatedQuestions = questions.map((question) => {
      if (question.id === questionID) {
        return { 
          ...question,
          alternatives: [
            ...question.alternatives, 
            {id: id,
              questionId: questionID,
              description: '...',
              isCorrect: false}
          ]};
      }
      return question;
    });
    setQuestions(updatedQuestions);
  }

  function setQuestionAlternativeValue(questionID: number, indexAlternative: number, description: string, isCorrect: boolean){
    const updatedQuestions = questions.map((question) => {
      if(question.id === questionID){
        question.alternatives.map((alternative, ind) => {
          if (ind === indexAlternative) { 
            return {
              ...alternative,
              description,
              isCorrect
            }
          }
          return alternative;
        });
      }
      return question;
    });
    setQuestions(updatedQuestions);
  }

  function setQuestionItemValue(index: number, field: string, value: string | Alternative) {
    const updatedQuestions = questions.map((question, ind) => {
      if (ind === index) {
        if(typeof value === 'string'){
          return { ...question, [field]: value };
        } else {
          return { ...question, [field]: [...question.alternatives, value] };
        }
      }
      return question;
    });
    setQuestions(updatedQuestions);
  }

  
  function handleCreateExam(e: FormEvent) {
    e.preventDefault();

    const examBody = {
      id: newLastExamId,
      title: title,
      subjects: subjects.split(/,| /) ,
      description: description,
      publishedAt: (new Date()).toISOString().replace('T', ' ').substring(0, 19),
      questions: questions
    }
    create(examBody);
    // history.push('/');
    Router.push('/');
    
  }


  return (
    <ExamFormContainer>
      <Head>
        <title>Exam Form | Exams</title>
      </Head>

      <main>
        <form onSubmit={handleCreateExam}>
          <fieldset>
            <legend>Create Exam</legend>
              <Input 
                name="Title"
                label="Title"
                value={title}
                onChange={(e) => { setTitle(e.target.value) }}
              />
              <Input 
              name="Subjects"
              label="Subjects"
              value={subjects}
              onChange={(e) => { setSubjects(e.target.value) }}
            />
            <TextArea 
              name="Description"
              label="Description"
              value={description}
              onChange={(e) => { setDescription(e.target.value)}}
            />
          </fieldset>
          <fieldset>
            <legend>
              Add Question
              <button type="button" onClick={(e) => {
                  const id = newLastQuestionId + 1;
                  setNewLastQuestionId(id);
                  addNewQuestionItem(id);
                }}>
                + New question
              </button>
            </legend>
            {questions.map((question, index) => {
              return (
                // <Question label="1." />
                <QuestionContainer>
                  <TextArea 
                    name="Description"
                    label={question.id.toString()}
                    value={question.description}
                    onChange={e => setQuestionItemValue(index, 'description', e.target.value)}
                  />
                  {question.alternatives.map((alternative, index) => {
                    return (
                      <Answer 
                        isCorrect={false}
                        label={alternative.id.toString()}
                        text={alternative.description}
                        onChange={e => setQuestionAlternativeValue(question.id, index, e.target.value, false)}
                      />
                    );
                  })}
                  <button type="button" onClick={(e) => {
                    const id = newLastAlternativeId + 1;
                    setNewLastAlternativeId(id);
                    addNewAlternativeItem(question.id, id);
                  }}>
                    + New answer
                  </button>
                </QuestionContainer>
              );
            })}
          </fieldset>
          <footer>
            <button type="submit">
              Save
            </button>
          </footer>
        </form>
      </main>

    </ExamFormContainer>
  );
}


export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  return {
    props: {
      id
    }
  }
}