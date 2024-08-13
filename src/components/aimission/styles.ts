import { styled } from 'styled-components';

export const AIwritingLayout = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
`;

export const WritingTitle = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 100%;
  max-width: 24.375rem;
  padding-left: 2.19rem;
  padding-top: 2.87rem;
  margin-bottom: 1.38rem;
`;

export const WritingBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 26.0625rem;
  height: 100vh;
  background: #f1f5f8;
  padding-top: 2.37rem;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #missionlistBox {
    display: flex;
    flex-direction: column;
    gap: 1.31rem;
  }
`;

export const InputTitle = styled.input`
  width: 22.375rem;
  height: 2.4375rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  border: none;
  background: #fff;
  box-shadow: 0px 0px 2px 1px rgba(205, 216, 219, 0.5);
  &::placeholder {
    color: #b2bbd2;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-left: 1.19rem;
  }
`;

export const InputContext = styled.textarea`
  width: 22.375rem;
  height: 22.375rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  background: #fff;
  box-shadow: 0px 0px 2px 1px rgba(205, 216, 219, 0.5);
  border: none;
  resize: none;
  padding: 0.5rem;
  margin-top: 0.88rem;

  &::placeholder {
    color: #b2bbd2;
    font-family: Pretendard, sans-serif;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-top: 1rem;
    padding-left: 0.5rem;
  }
`;

export const WritingSubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22.375rem;
  height: 4.625rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  border: none;
  background: #0047ff;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 2.19rem;
  margin-bottom: 3.5rem;
  cursor: pointer;
`;

export const AIresultBox = styled.div`
  width: 20rem;
  height: 25.9375rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  border: none;
  background: #fff;
  box-shadow: 0px 0px 2px 1px rgba(205, 216, 219, 0.5);
  color: #000;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 1rem;
  white-space: break-spaces;
`;

export const AIresultButtonBox = styled.div`
  display: flex;
  gap: 0.87rem;
  margin-top: 2.87rem;
  margin-bottom: 3.69rem;
`;

export const AIrewritebtn = styled.button`
  width: 9.5625rem;
  height: 4.0625rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  border: none;
  background: #47bdff;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const AIupdatebtn = styled.button`
  width: 9.5625rem;
  height: 4.0625rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  border: none;
  background: #0047ff;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
