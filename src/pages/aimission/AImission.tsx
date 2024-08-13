import React from 'react';
import { AIwritingLayout, WritingBackground } from '../../components/aimission/styles';
import MissionList from '../../components/mission/MissionList';
import Navigation from '../../components/navigation/Navigation';
import styled from 'styled-components';

function AImission() {
  return (
    <AIwritingLayout>
      <MissionTitleBox>
        <h2>미션을 통해 오늘도 힘내서 레벨업을 해봐요!</h2>
        <h1>이투가 추천하는 미션 리스트</h1>
      </MissionTitleBox>
      <WritingBackground>
        <div id="missionlistBox">
          <MissionList
            type="AI"
            title="AI 직무 분석 테스트 하기"
            description="테스트를 통해 자신의 성향 및 추천 직업을 알아보세요"
            link="/mission/aiwrite"
          />
          <MissionList
            title="추천 프로젝트 정보 찾아보기"
            description="AI가 추천해준 프로젝트 정보를 정리해보세요"
            link="/"
          />
          <MissionList
            title="추천 프로젝트 정보 찾아보기"
            description="AI가 추천해준 프로젝트 정보를 정리해보세요"
            link="/"
          />
          <MissionList
            title="추천 프로젝트 정보 찾아보기"
            description="AI가 추천해준 프로젝트 정보를 정리해보세요"
            link="/"
          />
          <MissionList
            title="추천 프로젝트 정보 찾아보기"
            description="AI가 추천해준 프로젝트 정보를 정리해보세요"
            link="/"
          />
          <MissionList
            title="추천 프로젝트 정보 찾아보기"
            description="AI가 추천해준 프로젝트 정보를 정리해보세요"
            link="/"
          />
          <MissionList
            title="추천 프로젝트 정보 찾아보기"
            description="AI가 추천해준 프로젝트 정보를 정리해보세요"
            link="/"
          />
        </div>
        <Navigation />
      </WritingBackground>
    </AIwritingLayout>
  );
}

export default AImission;

const MissionTitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 24.375rem;
  padding-top: 1.63rem;
  padding-left: 2.13rem;
  margin-bottom: 1.62rem;
  h2 {
    color: #000;
    font-family: Pretendard;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  h1 {
    color: #000;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
