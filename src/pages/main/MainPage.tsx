import {
  MainBox,
  MainJob,
  MainLayout,
  MainLevelBar,
  MainLevelBox,
  MainLevelProgress,
  MainLevelText,
  MainText,
  MainTop,
} from './styles';
import { ReactComponent as Logo } from '../../assets/images/logo-s.svg';
import { ReactComponent as MissionIcon } from '../../assets/images/missionIcon.svg';
import { ReactComponent as RankingIcon } from '../../assets/images/rankingIcon.svg';
import MainSection from './MainSection';
import { useMain } from './events';

export default function MainPage() {
  const { level, progressPercentage, handleMissionList, handleJobList, ranking } = useMain();
  const nickname = sessionStorage.getItem('nickname');

  return (
    <MainLayout>
      <MainBox>
        <MainTop>
          <Logo />
          <MainText>
            <h1>{nickname}님, 안녕하세요</h1>
            <h2>오늘도 제 2의 삶을 위해 이투와 함께 성장해봐요!</h2>
          </MainText>
          <MainLevelBox>
            <MainLevelText>
              <span>LV.{level}</span>
              <span>LV.10</span>
            </MainLevelText>
            <MainLevelBar>
              <MainLevelProgress percentage={progressPercentage}>
                <span>{progressPercentage}%</span>
              </MainLevelProgress>
            </MainLevelBar>
          </MainLevelBox>
        </MainTop>
        <MainSection Logo={MissionIcon} title="오늘의 미션" onClick={handleMissionList} />
        <MainSection Logo={RankingIcon} title="도전 이투!" ranking={ranking} />
        <MainJob>
          <MainSection title="추천 구인 구직" onClick={handleJobList} />
        </MainJob>
      </MainBox>
    </MainLayout>
  );
}
