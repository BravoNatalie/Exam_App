import { TextArea } from '../TextArea';
import { Answer } from '../Answer';

import { QuestionContainer } from './QuestionContainer';

type QuestionProps = {
  label: string;
  description: string;
}

export function Question({ label, description}: QuestionProps ) {
  return (
    <QuestionContainer>
      <TextArea 
        name="Description"
        label={label}
        value={description}
        onChange={() => { }}
      />
      <Answer 
        isCorrect={true}
        label="A"
        text="teste"
      />
      <Answer 
        isCorrect={true}
        label="B"
        text="teste 2"
      />
      <button type="button" onClick={() => { }}>
        + New answer
      </button>
    </QuestionContainer>
  );
}