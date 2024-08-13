import styled from 'styled-components';

export const MainLayout = styled.section`
  height: 100%;
  width: 100%;
  min-width: 26.0625rem;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.19rem;
`;

export const MainTop = styled.div`
  min-width: 21rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.37rem 0;
`;

export const MainText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  font-style: normal;
  line-height: normal;

  h1 {
    font-weight: 700;
  }
  h2 {
    font-weight: 400;
  }
`;

export const MainLevelBox = styled.div`
  width: 21rem;
  display: flex;
  flex-direction: column;
  gap: 0.31rem;
`;

export const MainLevelText = styled.div`
  display: flex;
  justify-content: space-between;
  color: #0048b5;
  font-size: 0.5625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const MainLevelBar = styled.div`
  width: 21rem;
  height: 1.4375rem;
  border-radius: 1.875rem;
  background: linear-gradient(90deg, #ebf8ff 0%, #e0f4ff 100%);
  box-shadow: 1px 2px 1px 0px rgba(205, 216, 219, 0.4);
  display: flex;
  align-items: center;
  padding: 0 0.38rem;
`;

export const MainLevelProgress = styled.div<{ percentage: number }>`
  width: ${({ percentage }) => `${percentage}%`};
  height: 0.8125rem;
  border-radius: 1.25rem;
  background: linear-gradient(90deg, #10a9ff 0%, #4a7dff 100%);
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: #fff;
    font-size: 0.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const MainSectionContainer = styled.div<{ title: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding-top: ${({ title }) => title === '추천 구인 구직' && '1.38rem'};
  overflow-x: hidden;
`;

export const MainSectionTitle = styled.div`
  min-width: 21rem;
  display: flex;
  align-items: center;
  gap: 13.5rem;
`;

export const MainSectionWithLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.31rem;

  > span {
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const MainSectionBox = styled.div<{ title: string }>`
  width: 100%;
  background: #f1f5f8;
  padding: 1rem 1.75rem;
  display: flex;
  flex-direction: ${({ title }) => title === '도전 이투!' && 'column'};
  gap: ${({ title }) => (title === '추천 구인 구직' ? '1.13rem' : '0.75rem')};
  justify-content: center;
  align-items: center;
`;

export const MainJob = styled.div`
  width: 100%;
  background: #f1f5f8;
  padding-bottom: 7rem;
`;
