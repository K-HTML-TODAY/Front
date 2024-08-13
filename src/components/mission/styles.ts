import styled from 'styled-components';

export const MissionListLayout = styled.div`
  width: 20.5625rem;
  height: 3.75rem;
  border-radius: 0.5rem;
  box-shadow: 1px 2px 2px 0px rgba(205, 216, 219, 0.5);
  display: flex;
  justify-content: space-between;
  background: #fff;
`;

export const MissionListBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 1.06rem 0.87rem;
  font-style: normal;
  line-height: normal;

  h1 {
    font-size: 0.75rem;
    font-weight: 700;
  }

  h2 {
    font-size: 0.5625rem;
    font-weight: 500;
  }
`;

export const MissionButton = styled.button<{ type?: string }>`
  width: 6.75rem;
  height: 3.75rem;
  border-radius: 0 0.5rem 0.5rem 0;
  border: none;
  background: ${({ type }) => (type === 'AI' ? '#ff8a00' : '#47BDFF')};
  color: #fff;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
