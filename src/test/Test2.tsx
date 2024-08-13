import React from 'react';
import MissionComponent from '../components/mission/MissionComponent';
import ProgramBox from '../components/ProgramBox/ProgramBox';

function Test2() {
  return (
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
      <ProgramBox imgUrl={''} imgAlt={''} programName={'중장년층을 위한 컴활 자격증'} link={'/'} />
    </div>
  );
}

export default Test2;
