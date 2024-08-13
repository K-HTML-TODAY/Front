import styled from 'styled-components';

export const JobBoxLayout = styled.div`
  width: 6.25rem;
  height: 9.625rem;
  border-radius: 0rem 0rem 0.5rem 0.5rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;

  img {
    width: 100%;
    height: 5.8125rem;
    border-radius: 0.5rem 0.5rem 0rem 0rem;
  }
`;

export const JobBoxContent = styled.div`
  height: 3.8125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #0048b5;
  font-style: normal;
  line-height: normal;

  h1 {
    font-size: 0.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 0.375rem;
    font-weight: 500;
  }

  h2 + h2 {
    margin-top: 0.25rem;
  }
`;
