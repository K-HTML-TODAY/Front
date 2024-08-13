import React, { FormEvent } from 'react';
import {
  AIwritingLayout,
  WritingTitle,
  WritingBackground,
  InputTitle,
  InputContext,
  WritingSubmitButton,
} from '../../components/aiwrite/styles';
import Navigation from '../../components/navigation/Navigation';

const AIwriting: React.FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('폼 제출 됨');
  };

  return (
    <AIwritingLayout>
      <WritingTitle>글쓰기</WritingTitle>
      <WritingBackground>
        <form onSubmit={handleSubmit}>
          <InputTitle id="inputTitle" type="text" placeholder="제목을 입력하세요" />
          <InputContext
            id="inputContext"
            placeholder="자유롭게 자신의 능력과 경력, 하고 싶은 일을 적어주세요 
예시 ) 사무직 / 평일 근무 / 집근처 근무지 희망"
          />
          <WritingSubmitButton type="submit">AI로 글 다듬기!</WritingSubmitButton>
        </form>
        <Navigation />
      </WritingBackground>
    </AIwritingLayout>
  );
};

export default AIwriting;
