import styled from 'styled-components';

export const JobLayout = styled.section`
  height: 100%;
  width: 100%;
  min-width: 26.0625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f1f5f8;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const JobTop = styled.header`
  width: 100%;
  height: 5.37rem;
  background-color: #fff;
  padding: 2.31rem 2.12rem 0;
  font-style: normal;
  line-height: normal;
  display: flex;
  flex-direction: column;
  gap: 0.44rem;

  h2 {
    font-size: 0.5625rem;
    font-weight: 500;
  }
  h1 {
    font-size: 0.75rem;
    font-weight: 700;
  }
`;

export const JobContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.88rem;
  padding: 1.94rem 1.88rem 0;
`;

export const JobGrid = styled.div`
  height: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  gap: 0 1.12rem;
`;

export const JobPaging = styled.div`
  display: flex;
  gap: 0.87rem;
`;
