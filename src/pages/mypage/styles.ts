import styled from 'styled-components';

export const MypageLayout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const MypageHeader = styled.div`
  width: 100%;
  max-width: 24.375rem;
  padding-left: 2.13rem;

  .title {
    color: #000;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-weight: 400;
    margin-bottom: 0.56rem;
    padding-top: 2.56rem;
    text-align: left;
  }
`;

export const MypageBody = styled.div`
  background: #f1f5f8;
  width: 100%;
  height: 100vh;
  max-width: 24.375rem;
`;

export const MypageBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 12.875rem;
  background: #0047ff;
  padding-left: 2.12rem;
`;

export const MypageImgBox = styled.div`
  width: 5.75rem;
  height: 5.75rem;
  border-radius: 50%;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MypageTextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1.25rem;

  .name {
    color: #fff;
    font-family: Pretendard;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .name-span {
    font-size: 0.9375rem;
  }

  .level {
    color: #fff;
    font-family: Pretendard-Medium;
    font-size: 0.625rem;
    font-weight: 500;
    padding-top: 1rem;
  }
`;

export const MypageBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.63rem;
  margin-top: 1rem;
  margin-bottom: 1.06rem;

  .button {
    width: 100%;
    height: 5.625rem;
    background: #ffffff;
    color: #000;
    font-family: Pretendard;
    font-size: 0.9375rem;
    font-weight: 400;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding-left: 2.31rem;
    cursor: pointer;
  }
`;
