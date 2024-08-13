import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainRankingType, RankingItemType } from './types';

export const useMain = () => {
  const uid = Number(sessionStorage.getItem('uid'));

  const navigate = useNavigate();

  const [level, setLevel] = useState(0);
  const [ranking, setRanking] = useState<RankingItemType[]>([]);

  const maxLevel = 10;
  const progressPercentage = Math.min((level / maxLevel) * 100, 100);

  useEffect(() => {
    const fetchLevelData = async () => {
      if (!uid) {
        return;
      }

      try {
        const response = await axios.get(`/api/v1/level/countLevel/${uid}`, {
          headers: {
            'X-AUTH-TOKEN': sessionStorage.getItem('token'),
          },
        });

        if (response.data !== null) {
          console.log('성공:', response.data);
          setLevel(response.data.count);
        } else {
          console.log('성공했으나 데이터 없음.', response.data);
        }
      } catch (err) {
        console.error('실패:', err);
      }
    };

    fetchLevelData();
  }, [uid]);

  useEffect(() => {
    const fetchRankingData = async () => {
      try {
        const response = await axios.get('/api/v1/level/top3', {
          headers: {
            'X-AUTH-TOKEN': sessionStorage.getItem('token'),
          },
        });

        const top3Users = response.data;
        const requests = top3Users.map((user: MainRankingType) =>
          axios
            .get(`/api/v1/level/countLevel/${user.uid}`, {
              headers: {
                'X-AUTH-TOKEN': sessionStorage.getItem('token'),
              },
            })
            .then((levelResponse) => ({
              nickname: user.nickname,
              level: levelResponse.data.count,
            }))
            .catch((err) => {
              console.error(`Failed to fetch level for user ${user.nickname}`, err);
              return { nickname: user.nickname, level: 0 };
            }),
        );

        const rankingsWithLevels = await Promise.all(requests);
        setRanking(rankingsWithLevels);
      } catch (err) {
        console.error('Failed to fetch top3 users:', err);
      }
    };

    fetchRankingData();
  }, []);

  const handleMissionList = () => {
    navigate('mission');
  };

  const handleJobList = () => {
    navigate('job');
  };

  return { level, progressPercentage, handleMissionList, handleJobList, ranking };
};
