import MissionList from '../components/mission/MissionList';

export default function MissionListTest() {
  return (
    <>
      <MissionList
        type="AI"
        title="AI 직무 분석 테스트 하기"
        description="테스트를 통해 자신의 성향 및 추천 직업을 알아보세요"
        link="/"
      />
      <MissionList
        title="추천 프로젝트 정보 찾아보기"
        description="AI가 추천해준 프로젝트 정보를 정리해보세요"
        link="/"
      />
    </>
  );
}
