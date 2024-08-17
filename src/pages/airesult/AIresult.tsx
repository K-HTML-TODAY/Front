import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  AIwritingLayout,
  WritingTitle,
  WritingBackground,
  AIresultBox,
  AIresultButtonBox,
  AIrewritebtn,
  AIupdatebtn,
} from '../../components/aimission/styles';
import Navigation from '../../components/navigation/Navigation';

interface LocationState {
  result: string;
}

const AIresult: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { result } = (location.state as LocationState) || { result: '' };

  const nickname = sessionStorage.getItem('nickname');
  const handleRewriteClick = () => {
    navigate('/mission/aiwrite');
  };

  const handleUpdateClick = () => {
    console.log('결과 업로드:', result);
    navigate('/mission/aisuccess');
  };

  return (
    <AIwritingLayout>
      <WritingTitle>{nickname}님이 쓴 글을 바탕으로 이투 AI가 정리해준 글이에요!</WritingTitle>
      <WritingBackground>
        <AIresultBox>{result || '결과가 없습니다.'}</AIresultBox>
        <AIresultButtonBox>
          <AIrewritebtn onClick={handleRewriteClick}>다시 쓰기</AIrewritebtn>
          <AIupdatebtn onClick={handleUpdateClick}>업로드</AIupdatebtn>
        </AIresultButtonBox>
        <Navigation />
      </WritingBackground>
    </AIwritingLayout>
  );
};

export default AIresult;
