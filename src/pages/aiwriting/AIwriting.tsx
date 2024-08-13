import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  AIwritingLayout,
  WritingTitle,
  WritingBackground,
  InputTitle,
  InputContext,
  WritingSubmitButton,
} from '../../components/aimission/styles';
import Navigation from '../../components/navigation/Navigation';

const AIwriting: React.FC = () => {
  const [title, setTitle] = useState('');
  const [context, setContext] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const staticText =
      '이 글을 쓰는 나는 구직자야. 해당 내용을 최적화하여 구직자가 원하는 정보를 보다 효과적으로 전달 받을 수 있도록 내용으로 수정해주고, 설득력 있는 문장들로 구성되게 해주고 내용을 좀 더 늘려줘';
    const combinedPrompt = `${title} ${context} ${staticText}`;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('http://localhost:8081/api/v1/main/getGptApi', {
        params: { prompt: combinedPrompt },
      });

      navigate('/mission/airesult', { state: { result: response.data.content } });
    } catch (err) {
      setError('Failed to fetch data');
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AIwritingLayout>
      <WritingTitle>글쓰기</WritingTitle>
      <WritingBackground>
        <form onSubmit={handleSubmit}>
          <InputTitle
            id="inputTitle"
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <InputContext
            id="inputContext"
            placeholder="자유롭게 자신의 능력과 경력, 하고 싶은 일을 적어주세요 
예시 ) 사무직 / 평일 근무 / 집근처 근무지 희망"
            value={context}
            onChange={(e) => setContext(e.target.value)}
          />
          <WritingSubmitButton type="submit" disabled={loading}>
            {loading ? '로딩 중...' : 'AI로 글 다듬기!'}
          </WritingSubmitButton>
        </form>
        {error && <p>{error}</p>}
        <Navigation />
      </WritingBackground>
    </AIwritingLayout>
  );
};

export default AIwriting;
