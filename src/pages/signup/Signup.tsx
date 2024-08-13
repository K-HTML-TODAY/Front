import React from 'react';
import styled from 'styled-components';
import { ReactComponent as NavigateBackIcon } from '../../assets/images/navigateback.svg';
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '../../components/input/Input';
import { SignUpValues } from './types';
import { useNavigate } from 'react-router-dom';
import { useSignUpMutation } from '../../services/sign/signApi';

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpValues>();

  const [signUp] = useSignUpMutation();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignUpValues> = async (data) => {
    console.log('회원가입 데이터:', data);
    try {
      const response = await signUp(data).unwrap();
      console.log(response);
      navigate('/login', { replace: true });
    } catch (error) {
      console.error(error);
      alert('회원가입에 실패했습니다.');
    }
  };

  return (
    <SignupLayout>
      <div id="signupHead">
        <NavigateBack onClick={() => navigate(-1)}>
          <NavigateBackIcon />
        </NavigateBack>
        <h1 id="signupTitle">회원가입</h1>
      </div>
      <div id="signupStroke" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField>
          <Label htmlFor="account">아이디</Label>
          <Input
            name="account"
            register={register}
            placeholder="아이디를 입력하세요"
            width="19.0625rem"
          />
          {errors.account && <ErrorMessage>{errors.account.message}</ErrorMessage>}
        </InputField>
        <InputField>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            name="password"
            register={register}
            placeholder="비밀번호를 입력하세요"
            width="19.0625rem"
          />
          {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        </InputField>
        <InputField>
          <Label htmlFor="name">이름</Label>
          <Input
            name="name"
            register={register}
            placeholder="실명을 입력하세요"
            width="19.0625rem"
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </InputField>
        <InputField>
          <Label htmlFor="phone">전화번호</Label>
          <Input
            name="phone"
            register={register}
            placeholder="전화번호를 입력하세요"
            width="19.0625rem"
          />
          {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
        </InputField>
        <InputField>
          <Label htmlFor="email">이메일</Label>
          <Input
            name="email"
            register={register}
            placeholder="이메일을 입력하세요"
            width="19.0625rem"
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </InputField>
        <InputField>
          <Label htmlFor="nickname">닉네임</Label>
          <Input
            name="nickname"
            register={register}
            placeholder="닉네임을 입력하세요"
            width="19.0625rem"
          />
          {errors.nickname && <ErrorMessage>{errors.nickname.message}</ErrorMessage>}
        </InputField>
        <SubmitButton type="submit">회원가입</SubmitButton>
      </form>
    </SignupLayout>
  );
};

export default SignUp;

const NavigateBack = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const SignupLayout = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;

  #signupHead {
    display: flex;
    width: 19.0625rem;
    height: auto;
    padding-left: 0.18rem;
    padding-top: 3.06rem;
  }
  #signupTitle {
    color: #0047ff;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-weight: 400;
    margin-left: 6.94rem;
  }

  #signupStroke {
    width: 19.0625rem;
    height: 0.0625rem;
    border-radius: 0.125rem;
    background: #b2bbd2;
    margin-top: 0.88rem;
    margin-bottom: 2.5rem;
  }
`;

const Label = styled.label`
  color: #000;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 0.5rem;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.56rem;
  gap: 0.34rem;
`;

const ErrorMessage = styled.p`
  color: red;
  font-family: Pretendard;
  font-size: 0.75rem;
  margin-top: 0.5rem;
`;

const SubmitButton = styled.button`
  width: 16.5rem;
  height: 4.0625rem;
  border-radius: 0.3125rem;
  background: #0047ff;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.9375rem;
  font-weight: 700;
  line-height: normal;
  border: none;
  cursor: pointer;
  margin-top: 3.5rem;
  margin-left: 1.31rem;
`;
