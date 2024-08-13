import JobBox from '../../components/job/JobBox';
import MissionComponent from '../../components/mission/MissionComponent';
import More from '../../components/more/More';
import Ranking from '../../components/ranking/Ranking';
import {
  MainSectionBox,
  MainSectionContainer,
  MainSectionTitle,
  MainSectionWithLogo,
} from './styles';
import { MainSectionType } from './types';
import job1 from '../../assets/images/job1.png';
import job2 from '../../assets/images/job2.png';
import job3 from '../../assets/images/job3.png';

export default function MainSection({ Logo, title, onClick, ranking }: MainSectionType) {
  const rankingList = ranking || [
    { nickname: '', level: 0 },
    { nickname: '', level: 0 },
    { nickname: '', level: 0 },
  ];

  return (
    <MainSectionContainer title={title}>
      <MainSectionTitle>
        <MainSectionWithLogo>
          {Logo ? <Logo /> : <></>}
          <span>{title}</span>
        </MainSectionWithLogo>
        {(title === '오늘의 미션' || title === '추천 구인 구직') && onClick && (
          <More onClick={onClick} />
        )}
      </MainSectionTitle>
      <MainSectionBox title={title}>
        {title === '오늘의 미션' && (
          <>
            <MissionComponent
              mainText={'AI 활용한 구인글 쓰기'}
              buttonBackgroundColor={'#FF8A00'}
              link={'mission/aiwrite'}
              boxWidth={'10.125'}
              boxHeight={'6.625'}
            />
            <MissionComponent
              mainText={'추천 구인구직 탐색'}
              buttonBackgroundColor={'#47BDFF'}
              link={'job'}
              boxWidth={'10.125'}
              boxHeight={'6.625'}
            />
          </>
        )}
        {title === '도전 이투!' && (
          <>
            <Ranking
              number={1}
              nickname={rankingList[0]?.nickname || ''}
              level={rankingList[0]?.level || 0}
            />
            <Ranking
              number={2}
              nickname={rankingList[1]?.nickname || ''}
              level={rankingList[1]?.level || 0}
            />
            <Ranking
              number={3}
              nickname={rankingList[2]?.nickname || ''}
              level={rankingList[2]?.level || 0}
            />
          </>
        )}
        {title === '추천 구인 구직' && (
          <>
            <JobBox
              image={job1}
              title="(주)감자마켓 문서정리 모집"
              location="경기도 용인시 처인구"
              time="10:00~18:00"
            />
            <JobBox
              image={job2}
              title="(주)감자마켓 문서정리 모집"
              location="경기도 용인시 처인구"
              time="10:00~18:00"
            />
            <JobBox
              image={job3}
              title="(주)감자마켓 문서정리 모집"
              location="경기도 용인시 처인구"
              time="10:00~18:00"
            />
          </>
        )}
      </MainSectionBox>
    </MainSectionContainer>
  );
}
