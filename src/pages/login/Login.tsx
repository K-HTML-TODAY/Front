import React from 'react';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '../../components/input/Input';
import { LoginValues } from './types';
import { ReactComponent as Logo } from '../../assets/images/Logo.svg';
import GoogleImg from '../../assets/images/google.svg';
import KakaoImg from '../../assets/images/kakao.svg';
import NaverImg from '../../assets/images/naver.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInMutation } from '../../services/sign/signApi';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>();

  const [signIn, { isLoading, error }] = useSignInMutation();

  const onSubmit: SubmitHandler<LoginValues> = async (data) => {
    try {
      const response = await signIn(data).unwrap();
      sessionStorage.setItem('token', response.token);
      navigate('/', { replace: true });
    } catch (err) {
      console.error('로그인 실패:', err);
    }
  };

  return (
    <LoginLayout>
      <LogoLayout>
        <Logo />
      </LogoLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p id="inputTitle">로그인하기</p>
        <div id="inputID">
          <Input name="account" register={register} placeholder="아이디를 입력하세요" />
          {errors.account && <p>{errors.account.message}</p>}
        </div>
        <div id="inputPW">
          <Input name="password" register={register} placeholder="비밀번호를 입력하세요" />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button id="submitButton" type="submit" disabled={isLoading}>
          {isLoading ? '로그인 중...' : '로그인'}
        </button>
        {error && <p id="error">아이디/비밀번호를 확인해주세요.</p>}
        <p id="snsTitle">SNS로 로그인</p>
        <div id="snsBox">
          <img className="snsimg" src={GoogleImg} alt="구글" />
          <img className="snsimg" src={KakaoImg} alt="카카오" />
          <img className="snsimg" src={NaverImg} alt="네이버" />
        </div>
        <div id="loginbottom">
          <p>비밀번호 찾기</p>
          <Link to="/signup">
            <p>회원가입</p>
          </Link>
        </div>
      </form>
    </LoginLayout>
  );
};

export default Login;

const LogoLayout = styled(Logo)`
  margin-top: 4.06rem;
`;

const LoginLayout = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  #inputTitle {
    color: #0047ff;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-weight: 400;
    margin: 3.56rem 0 1.38rem 0;
  }

  #submitButton {
    width: 16.5rem;
    height: 4.0625rem;
    border-radius: 0.3125rem;
    border: none;
    background: #0047ff;
    color: #fff;
    text-align: center;
    font-family: Pretendard;
    font-size: 0.9375rem;
    font-weight: 700;
    margin: 1.88rem 0 0 0;
  }

  #inputID {
    margin-bottom: 0.94rem;
  }

  #snsTitle {
    color: #0047ff;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-weight: 400;
    margin: 3.31rem 0 0 0;
  }

  #snsBox {
    display: flex;
    gap: 3.3rem;
    margin: 1.69rem 0 0 0;
  }

  #loginbottom {
    display: flex;
    align-items: center;
    margin-top: 2.24rem;

    p {
      color: #aec8d7;
      font-family: Inter;
      font-size: 0.75rem;
      font-weight: 400;
      margin: 0;
    }

    p:not(:last-child)::after {
      content: '|';
      margin: 0 3rem;
    }

    a {
      text-decoration: none;
      color: #aec8d7;
    }
  }
`;
