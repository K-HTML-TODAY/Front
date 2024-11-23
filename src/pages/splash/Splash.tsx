import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as SplashImg } from '../../assets/images/splashImg.svg';
import { useNavigate } from 'react-router-dom';

function Splash() {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    setFadeOut(true);
    setTimeout(() => {
      navigate(path);
    }, 500);
  };

  return (
    <SplashLayout fadeOut={fadeOut}>
      <SplashImg />
      <p id="splashtext">중장년층들의 새로운 출발을 위한 서비스 ‘이투’</p>
      <ButtonContainer>
        <SplashButton onClick={() => handleNavigate('/login')} white>
          로그인
        </SplashButton>
        <SplashButton onClick={() => handleNavigate('/main')}>메인으로 가기</SplashButton>
      </ButtonContainer>
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
  max-width: 24.375rem;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  background: #0047ff;
  padding-top: 14.81rem;
  gap: 1.5rem;
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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-width: 20rem;
`;

const SplashButton = styled.button<{ white?: boolean }>`
  width: 100%;
  height: 3rem;
  background: ${({ white }) => (white ? '#fff' : '#0047ff')};
  color: ${({ white }) => (white ? '#0047ff' : '#fff')};
  border: ${({ white }) => (white ? '1px solid #0047ff' : 'none')};
  border-radius: 0.5rem;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ white }) => (white ? '#e6e6e6' : '#0036cc')};
  }
`;
