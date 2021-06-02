import {HeaderContainer} from './HeaderContainer';
import Link from 'next/link';

export function Header(){
  return (
    <HeaderContainer>
      <Link href={"/"}>
        <img src="/exams_logo.svg" alt="Exams" />
      </Link>
        
      <p>Best place to create custom exams</p>
    </HeaderContainer>
  );
}