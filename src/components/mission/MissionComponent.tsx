import React from 'react';
import styled from 'styled-components';
import { MissionComponentProps } from './types';

const MissionComponent: React.FC<MissionComponentProps> = ({
  mainText,
  boxWidth,
  boxHeight,
  buttonBackgroundColor,
  link,
}) => {
  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <MissionComponentBox
      boxWidth={boxWidth}
      boxHeight={boxHeight}
      buttonBackgroundColor={buttonBackgroundColor}
    >
      <h1 id="subText">1Level up!</h1>
      <h2 id="mainText">{mainText}</h2>
      <div id="MissionButton" onClick={handleClick}>
        하러 가기
      </div>
    </MissionComponentBox>
  );
};

export default MissionComponent;

const MissionComponentBox = styled.div<{
  boxWidth: string;
  boxHeight: string;
  buttonBackgroundColor: string;
}>`
  width: ${(props) => props.boxWidth}rem;
  height: ${(props) => props.boxHeight}rem;
  border-radius: 0.5625rem;
  background: #fff;
  box-shadow: 0px 0px 5px 0px #d9e5ec;
  padding: 0.94rem 0 0 1.69rem;

  #subText {
    color: #4680ff;
    font-family: Pretendard;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 0.31rem;
  }

  #mainText {
    color: #000;
    font-family: Pretendard;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 0.62rem;
  }

  #MissionButton {
    display: flex;
    width: 6.6875rem;
    height: 2.1875rem;
    flex-shrink: 0;
    border-radius: 0.25rem;
    background: ${(props) => props.buttonBackgroundColor};
    color: #fff;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-family: Pretendard;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
  }
`;
