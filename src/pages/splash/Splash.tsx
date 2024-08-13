import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as SplashImg } from '../../assets/images/splashImg.svg';
import { useNavigate } from 'react-router-dom';

function Splash() {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  const handleSplashClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate('/');
    }, 500);
  };

  return (
    <SplashLayout onClick={handleSplashClick} fadeOut={fadeOut}>
      <SplashImg />
      <p id="splashtext">중장년층들의 새로운 출발을 위한 서비스 ‘이투’</p>
    </SplashLayout>
  );
}

export default Splash;

const fadeOutAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const SplashLayout = styled.div<{ fadeOut: boolean }>`
  display: flex;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  background: #0047ff;
  padding-top: 14.81rem;
  gap: 0.87rem;
  opacity: 1;
  animation: ${({ fadeOut }) => (fadeOut ? fadeOutAnimation : 'none')} 0.5s forwards;

  #splashtext {
    color: #fff;
    text-align: center;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.875rem;
    letter-spacing: -0.03125rem;
  }
`;
