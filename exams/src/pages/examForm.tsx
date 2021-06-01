import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';

import { Input } from '../components/Input';
import { TextArea } from '../components/TextArea';
import { Question } from '../components/Question';

import { ExamFormContainer } from '../styles/pages/ExamFormContainer';

export default function ExamForm() {
  return (
    <ExamFormContainer>
      <Head>
        <title>Exam Form | Exams</title>
      </Head>

      <main>
        <form onSubmit={() => {}}>
          <fieldset>
            <legend>Create Exam</legend>
              <Input 
                name="Title"
                label="Title"
                value=""
                onChange={() => { }}
              />
              <Input 
              name="Subjects"
              label="Subjects"
              value=""
              onChange={() => { }}
            />
            <TextArea 
              name="Description"
              label="Description"
              value=""
              onChange={() => { }}
            />
          </fieldset>
          <fieldset>
            <legend>
              Add Question
              <button type="button" onClick={() => {}}>
                + New question
              </button>
            </legend>
            <Question label="1." />
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