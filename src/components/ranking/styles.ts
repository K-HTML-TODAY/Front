import styled from 'styled-components';

export const RankingLayout = styled.div<{ $number: number }>`
  width: 21.3125rem;
  height: 4.3125rem;
  border-radius: 0.75rem;
  background-color: ${({ $number }) => ($number === 1 ? '#ffb62a' : '#BEE8FF')};
  display: flex;
  align-items: center;
  padding: 0 1.06rem;
`;

export const RankingBox = styled.div`
  width: 100%;
  display: flex;
  gap: 1.19rem;
`;

export const RankingNumber = styled.div<{ $number: number }>`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  background-color: ${({ $number }) =>
    $number === 1 ? '#ff8a00' : $number === 2 ? '#0075FF' : ' #47BDFF'};
  filter: drop-shadow(1px 1px 1px rgba(255, 238, 226, 0.25));
  padding-right: ${({ $number }) => ($number === 1 ? '0.35rem' : '0')};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RankingContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const RankingLogo = styled.div`
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 0.4375rem;
  background: #fff;
`;

export const RankingText = styled.div<{ $number: number }>`
  height: 2.375rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-style: normal;
  line-height: normal;
  color: ${({ $number }) => ($number === 1 ? '#5B3529' : '#2496FF')};

  h5 {
    margin-top: 0.125rem;
    font-size: 0.625rem;
    font-weight: 500;
  }

  h1 {
    font-family: 'Jalnan';
    font-size: 1.25rem;
    font-weight: 700;
  }
`;
