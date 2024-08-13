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
  const { level, isLevelSuccess } = useMain();

  return (
    <MainLayout>
      <MainBox>
        <MainTop>
          <Logo />
          <MainText>
            <h1>채은님, 안녕하세요</h1>
            <h2>오늘도 제 2의 삶을 위해 이투와 함께 성장해봐요!</h2>
          </MainText>
          <MainLevelBox>
            <MainLevelText>
              {isLevelSuccess && <span>LV.{level}</span>}
              <span>LV.10</span>
            </MainLevelText>
            <MainLevelBar>
              <MainLevelProgress>
                <span>30%</span>
              </MainLevelProgress>
            </MainLevelBar>
          </MainLevelBox>
        </MainTop>
        <MainSection Logo={MissionIcon} title="오늘의 미션" />
        <MainSection Logo={RankingIcon} title="도전 이투!" />
        <MainJob>
          <MainSection title="추천 구인 구직" />
        </MainJob>
      </MainBox>
    </MainLayout>
  );
}
