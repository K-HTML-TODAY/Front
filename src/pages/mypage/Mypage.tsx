import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ReactComponent as MypageImg } from '../../assets/images/mypage.svg';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '../../components/navigation/Navigation';
import {
  MypageLayout,
  MypageHeader,
  MypageBody,
  MypageBox,
  MypageImgBox,
  MypageTextBox,
  MypageBoxContainer,
} from './styles';

interface User {
  uid: number;
  name: string;
  email: string;
  phone: string;
  account: string;
  nickname: string;
  level: number;
}

function Mypage() {
  const [user, setUser] = useState<User | null>(null);
  const [level, setLevel] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = sessionStorage.getItem('token');

      try {
        const userResponse = await axios.get('/api/v1/mypage/getUser', {
          headers: {
            'X-AUTH-TOKEN': token,
          },
        });
        setUser(userResponse.data);
        sessionStorage.setItem('nickname', userResponse.data.nickname);
        sessionStorage.setItem('uid', userResponse.data.uid.toString());

        const uid = sessionStorage.getItem('uid');
        const levelResponse = await axios.get(`/api/v1/level/countLevel/${uid}`, {
          headers: {
            'X-AUTH-TOKEN': token,
          },
        });

        setLevel(levelResponse.data.count);
      } catch (err) {
        console.error('Error fetching user data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    navigate('/login');
  };

  if (loading) return <p>Loading...</p>;

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
              {user?.nickname || '로그인 해주세요'}
              <span className="name-span">{user ? `님 (${user.name || '이름 없음'})` : ''}</span>
            </h2>
            <p className="level">
              {user
                ? `${user.nickname}님의 레벨은 현재 LV.${level || 0}입니다.`
                : '로그인하여 레벨과 미션 정보를 확인하세요.'}
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
          {user && (
            <div className="button" onClick={handleLogout}>
              로그아웃
            </div>
          )}
        </MypageBoxContainer>
        <Navigation />
      </MypageBody>
    </MypageLayout>
  );
}

export default Mypage;
