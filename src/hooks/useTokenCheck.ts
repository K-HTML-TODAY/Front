import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useTokenCheck = () => {
  const navigate = useNavigate();
  const accessToken = sessionStorage.getItem('token');

  useEffect(() => {
    if (!accessToken) {
      // 토큰이 없으면 로그아웃 처리
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('nickname');
      sessionStorage.removeItem('uid');
      navigate('/login', { replace: true });
    }
  }, [accessToken]);
};

export default useTokenCheck;
