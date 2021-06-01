import { GetServerSideProps } from 'next'
import Head from 'next/head';
import Link from 'next/link';
import { MdEdit, MdDelete, MdSearch } from 'react-icons/md';
import { RiAddBoxLine } from 'react-icons/ri';

import { api } from '../services/api';

import {HomeContainer} from '../styles/pages/HomeContainer';
import { Input } from '../components/Input';


type Exam = {
  id: string;
  title: string;
  subjects: Array<string>;
  description: string;
  publishedAt: string;
}

type HomeProps = {
  allExams: Array<Exam>
}


export default function Home({ allExams }: HomeProps) {

  return (
    <HomeContainer>
      <Head>
        <title>Home | Exams</title>
      </Head>

      <section className="userInteraction">
        <Input 
          name="search" 
          Icon={MdSearch}
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
              {allExams.map((exam, index) => {
                return (
                  <tr key={exam.id}>
                    <td>{exam.id}</td>
                    <td>
                      <Link href={`/exams/${exam.id}`}>
                        <a>{exam.title}</a>
                      </Link>
                    </td>
                    <td>{exam.subjects}</td>
                    <td>11</td>
                    {/* <td>{exam.numberOfQuestions}</td> */}
                    <td>{exam.publishedAt}</td>
                    <td>
                      <div className="buttonContainer">
                        <button name="Edit" type="button">
                          <MdEdit className="buttonIcon"/>
                        </button>
                        <button name="Delete" type="button">
                          <MdDelete className="buttonIcon"/>
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
        </table>
      </section>
    </HomeContainer>
  )
}

export const  getServerSideProps: GetServerSideProps = async () => {

  const { data } = await api.get('exams', { 
    params: {
      _limit: 12,
      _order: 'publishedAt',
      _sort: 'desc'
    }
  });

  const allExams = data.map(exam => {
    return {
      id: exam.id,
      title: exam.title,
      subjects: exam.subjects,
      description: exam.description,
      publishedAt: exam.publishedAt
    }
  });


  return { props: { allExams } }
}