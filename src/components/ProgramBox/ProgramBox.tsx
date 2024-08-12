import React from 'react';
import styled from 'styled-components';
import { ProgramBoxProps } from './types';
import defaultImage from 'path/to/default-image.jpg';

const ProgramBox: React.FC<ProgramBoxProps> = ({ imgUrl, imgAlt, programName }) => {
  const imageSource = imgUrl || defaultImage;

  return (
    <ProgramBoxContainer>
      <div id="programImg">
        <img src={imageSource} alt={imgAlt || 'Program image'} />
      </div>
      <div id="programName">{programName}</div>
    </ProgramBoxContainer>
  );
};

export default ProgramBox;

const ProgramBoxContainer = styled.div`
  width: 6.25rem;
  height: 9.625rem;
  flex-shrink: 0;

  #programImg {
    width: 6.25rem;
    height: 8.4375rem;
    flex-shrink: 0;
    border-radius: 0.5rem 0.5rem 0 0;
    background: #bbb;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  #programName {
    width: 6.25rem;
    height: 1.1875rem;
    flex-shrink: 0;
    border-radius: 0 0 0.5rem 0.5rem;
    background: #fff;
    color: #0048b5;
    font-family: Pretendard, sans-serif;
    font-size: 0.5rem;
    font-weight: 400;
    text-align: center;
    line-height: 1.1875rem;
  }
`;
