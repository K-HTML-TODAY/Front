import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MypageImg } from '../../assets/images/mypage.svg';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '../../components/navigation/Navigation';

function Mypage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 로그아웃 로직
    navigate('/login');
  };

  return (
    <MypageLayout>
      <MypageHeader>
        <h1 className="title">내 정보</h1>
      </MypageHeader>
      <MypageBody>
        <MypageBox>
          <MypageImgBox>
            <MypageImg />
          </MypageImgBox>
          <MypageTextBox>
            <h2 className="name">
              채은 <span className="name-span">님 (배채은)</span>
            </h2>
            <p className="level">
              채은님의 레벨은 현재 LV.3입니다. <br />
              이투가 제안하는 미션을 통해 레벨을 올려보세요!
            </p>
          </MypageTextBox>
        </MypageBox>
        <MypageBoxContainer>
          <Link to="/" className="button">
            내가 쓴 글 보기
          </Link>
          <Link to="/" className="button">
            회원 정보 수정하기
          </Link>
          <Link to="/" className="button">
            고객센터
          </Link>
          <div className="button" onClick={handleLogout}>
            로그아웃
          </div>
        </MypageBoxContainer>
        <Navigation />
      </MypageBody>
    </MypageLayout>
  );
}

export default Mypage;

const MypageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const MypageHeader = styled.div`
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

const MypageBody = styled.div`
  background: #f1f5f8;
  width: 100%;
`;

const MypageBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 12.875rem;
  background: #0047ff;
  padding-left: 2.12rem;
`;

const MypageImgBox = styled.div`
  width: 5.75rem;
  height: 5.75rem;
  border-radius: 50%;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MypageTextBox = styled.div`
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

const MypageBoxContainer = styled.div`
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
