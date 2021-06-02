import { GetStaticPaths, GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { api } from '../../services/api';
import { useExam } from '../../contexts/ExamContext';

import { ExamContainer } from '../../styles/pages/ExamContainer';

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

type ExamProps = {
  exam: Exam;
}

export default function Exam({ exam }: ExamProps ) {

  const { remove, edit, examList, getQuestions } = useExam();

  const questions = getQuestions(exam.id);

  function numberToLetter(number: number): string {
    return (number + 9).toString(36).toUpperCase();
  }

  return (
    <ExamContainer>
      <Head>
       <title>{exam.title} | Exams</title>
      </Head>

      <main>
        <section className="examInfo">
          <h1>{exam.title}</h1>
          <div className="subjects">
            {exam.subjects.map( subject => {
              return (
                <p>#{subject}</p>
              )
            })}
          </div>
          <p className="examDescription">{exam.description}</p>
        </section>

        <section className="questions">
          {questions.map((question, index) => {
            return (
              <article key={question.id} className="questionItem">
                <div className="questionDescription">
                  <span>{question.id}</span>
                  <h2>{question.description}</h2>
                </div>
                {question.alternatives.map((alternative, index) => {
                  return (
                    <div key={alternative.id} className="alternativesItems">
                      <span>{numberToLetter(Number(alternative.id))}</span>
                      <p>{alternative.description}</p>
                    </div>
                  )
                })}
              </article>
            )
          })}
        </section>
      </main>
    </ExamContainer>
  )
}


// export const getStaticPaths: GetStaticPaths = async () => {
//   const { data } = await api.get('exams', {
//     params: { 
//       _limit: 2,
//       _sort: 'published_at',
//       _order: 'desc'
//     }
//   })

//   const paths = data.map(exam => {
//     return {
//       params: {
//         slug: exam.id
//       }
//     }
//   })

//   return {
//     paths,
//     fallback: 'blocking'
//   }
// }


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.params;
  const { data } = await api.get(`/exams/${slug}`)
  
  // formatação dos dados 
  const exam = {
    id: data.id,
    title: data.title,
    subjects: data.subjects,
    description: data.description,
    publishedAt: data.publishedAt,
  }

  return {
    props: {
      exam
    }
  }
}