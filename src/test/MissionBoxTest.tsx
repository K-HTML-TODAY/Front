import React from 'react';
import MissionComponent from '../components/mission/MissionComponent';

export default function MissionBoxTest() {
  return (
    <>
      <div>
        <MissionComponent
          mainText={'AI 직무 분석 테스트'}
          buttonBackgroundColor={'#FF8A00'}
          link={'/'}
        />
        <MissionComponent
          mainText={'추천 프로젝트 참여'}
          buttonBackgroundColor={'#47BDFF'}
          link={'/'}
        />
      </div>
    </>
  );
}
