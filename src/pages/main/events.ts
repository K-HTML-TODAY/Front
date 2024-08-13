import { useCountLevelForUserQuery } from '../../services/level/levelApi';

export const useMain = () => {
  const uid = Number(sessionStorage.getItem('uid'));

  const { data: level, isSuccess: isLevelSuccess } = useCountLevelForUserQuery(uid, {
    skip: !uid, // uid가 없으면 요청을 생략
  });

  return { level, isLevelSuccess };
};
