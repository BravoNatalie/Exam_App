import { GetServerSideProps } from 'next'
import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { MdEdit, MdDelete, MdSearch } from 'react-icons/md';
import { RiAddBoxLine } from 'react-icons/ri';

import { api } from '../services/api';
import { useExam } from '../contexts/ExamContext';

import {HomeContainer} from '../styles/pages/HomeContainer';
import { Input } from '../components/Input';


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

type HomeProps = {
  allExams: Array<Exam>
}


export default function Home({ allExams }: HomeProps) {

  const { remove, setExams, examList, lastQuestionId } = useExam();
  setExams(allExams);

  // useEffect(() =>  {

  //   async function getExams() {
  //     try{
  //       const exams = await api.get('exams', { 
  //         params: {
  //           _limit: 12,
  //           _order: 'publishedAt',
  //           _sort: 'desc'
  //         }
  //       });
      
  //       const getQuestions = async (exam) =>{
  //         try{
  //           const {data} = await api.get('questions', { 
  //             params: {
  //               examId: exam.id,
  //               _order: exam.orderNumber
  //             }
  //           });
  //           return data;
  //         } catch(err){
  //           throw 'Error on getting questions'
  //         }
  //       }
        
  //         const getAlternatives = async (question) => {
  //           try {
  //             const {data} = await api.get('alternatives', {
  //               params: {
  //                 questionId: question.id
  //               }
  //             });
  //             return data;
  //           } catch (err) {
  //             throw 'Error on getting answers'
  //           }
  //         }
        
  //         const allExams =  [];
  //         for (const exam of exams.data) {
  //           let allQuestions = [];
  //           let allAlternatives = [];
        
  //           const questions = await getQuestions(exam);
        
  //           for (const question of questions) {
  //             const alternatives = await getAlternatives(question);
        
  //             allAlternatives = alternatives.map(alternative =>{ 
  //               return {
  //                 id: alternative.id,
  //                 questionId: alternative.questionId,
  //                 description: alternative.description,
  //                 isCorrect: alternative.isCorrect
  //               }
  //             });
        
  //             allQuestions.push({
  //               id: question.id,
  //               examId: question.examId,
  //               description: question.description,
  //               orderNumber: question.orderNumber,
  //               alternatives: allAlternatives
  //             });
              
  //           }
            
  //           allExams.push({
  //             id: exam.id,
  //             title: exam.title,
  //             subjects: exam.subjects,
  //             description: exam.description,
  //             publishedAt: exam.publishedAt,
  //             questions: allQuestions
  //           });
  //         }
  //         setExams(allExams);
  //     } catch (err) {
  //       alert("Error: " + err);
  //     }
  //   }
  //   getExams();
  // }, [examList]);
  
  // useEffect(() => {}, []);

  return (
    <HomeContainer>
      <Head>
        <title>Home | Exams</title>
      </Head>

      <section className="userInteraction">
       
        <Input 
          name="search" 
          // Icon={MdSearch}
          value=""
          onChange={() => { }}
        />
        <Link href="/examForm">
          <button name="New Button" type="button">
            <RiAddBoxLine className="newButtonIcon"/>
            <span> New </span>
          </button>
        </Link>
      </section>

      <section className="allExams">
        <table cellSpacing={0}> 
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Subjects</th>
                <th>nº Questions</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {examList.map((exam, index) => {
                return (
                  <Link href={`/exams/${exam.id}`}>
                    <tr key={exam.id}>
                      <td>{exam.id}</td>
                      <td>
                        <a>{exam.title}</a>
                      </td>
                      <td>{exam.subjects.join(', ')}</td>
                      <td>{exam.questions.length}</td>
                      <td>{exam.publishedAt}</td>
                      <td>
                        <div className="buttonContainer">
                          <Link href={`/examForm?id=${exam.id}`}>
                            <button name="Edit" type="button">
                              <MdEdit className="buttonIcon"/>
                            </button>
                          </Link>
                          <button name="Delete" type="button" onClick={e => remove(exam.id)}>
                            <MdDelete className="buttonIcon"/>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </Link>
                )
              })}
            </tbody>
        </table>
      </section>
    </HomeContainer>
  )
}


export const  getServerSideProps: GetServerSideProps = async () => {

  const exams = await api.get('exams', { 
    params: {
      _limit: 12,
      _order: 'publishedAt',
      _sort: 'desc'
    }
  });

  const getQuestions = async (exam) =>{
    const {data} = await api.get('questions', { 
      params: {
        examId: exam.id,
        _order: exam.orderNumber
      }
    });
    return data;
  }

  const getAlternatives = async (question) => {
    const {data} = await api.get('alternatives', {
      params: {
        questionId: question.id
      }
    });
    return data;
  }

  const allExams =  [];
  for (const exam of exams.data) {
    let allQuestions = [];
    let allAlternatives = [];

    const questions = await getQuestions(exam);

    for (const question of questions) {
      const alternatives = await getAlternatives(question);

      allAlternatives = alternatives.map(alternative =>{ 
        return {
          id: alternative.id,
          questionId: alternative.questionId,
          description: alternative.description,
          isCorrect: alternative.isCorrect
        }
      });

      allQuestions.push({
        id: question.id,
        examId: question.examId,
        description: question.description,
        orderNumber: question.orderNumber,
        alternatives: allAlternatives
      });
      
    }
    
    allExams.push({
      id: exam.id,
      title: exam.title,
      subjects: exam.subjects,
      description: exam.description,
      publishedAt: exam.publishedAt,
      questions: allQuestions
    });
    }

  return { props: { allExams } }
}