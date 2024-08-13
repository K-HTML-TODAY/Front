import { useEffect } from 'react';
import axios from 'axios';

const useTokenCheck = () => {
  useEffect(() => {
    const fetchUserData = async () => {
      const token = sessionStorage.getItem('token');

      try {
        const response = await axios.get('/api/v1/mypage/getUser', {
          headers: {
            'X-AUTH-TOKEN': token,
          },
        });
        sessionStorage.setItem('nickname', response.data.nickname);
        sessionStorage.setItem('uid', response.data.uid);
      } catch (err) {
        console.error('Error fetching user data:', err);
      }
    };

    fetchUserData();
  }, []);
};

export default useTokenCheck;
