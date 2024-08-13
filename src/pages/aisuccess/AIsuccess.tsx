import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SuccessImg } from '../../assets/images/successImg.svg';
import Navigation from '../../components/navigation/Navigation';
import MissionComponent from '../../components/mission/MissionComponent';

function AIsuccess() {
  return (
    <AIsuccessLayout>
      <div id="aisuccessgraybox">
        <AIsuccessBox>
          <div id="successHead">
            미션완료!
            <SuccessImg />
          </div>
          <p>
            <span>채은</span>님께서 AI를 활용하여
            <br />
            구인구직 글을 성공적으로 업로드하였어요
            <br />
            아래 버튼을 눌러 보상을 받아 레벨을 높여보아요!
          </p>
          <div id="levelupButton">Level up!</div>
        </AIsuccessBox>
      </div>
      <p id="middletext">다른 미션도 수행하시겠어요?</p>
      <OtherMission>
        <div id="othermissions">
          <MissionComponent
            mainText={'추천 구인구직 탐색'}
            buttonBackgroundColor={'#47BDFF'}
            link={'/'}
            boxWidth={'9.375'}
            boxHeight={'8.1875'}
          />
          <MissionComponent
            mainText={'커리어 목표 설정'}
            buttonBackgroundColor={'#47BDFF'}
            link={'/'}
            boxWidth={'9.375'}
            boxHeight={'8.1875'}
          />
        </div>
        <Navigation />
      </OtherMission>
    </AIsuccessLayout>
  );
}

export default AIsuccess;

const AIsuccessLayout = styled.div`
  display: flex;
  max-width: 26.0625rem;
  flex-direction: column;
  margin: 0 auto;
  #middletext {
    padding-left: 2.06rem;
    padding-top: 4.94rem;
    margin-bottom: 0.75rem;
    color: #000;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  #aisuccessgraybox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20.125rem;
    background: #f1f5f8;
    margin-top: 2.81rem;
  }
`;
const AIsuccessBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20.3125rem;
  height: 14.1875rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  background: #fff;
  box-shadow: 1px 2px 2px 0px rgba(205, 216, 219, 0.5);
  #successHead {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20.3125rem;
    height: 3.125rem;
    border-radius: 0.3125rem 0.3125rem 0rem 0rem;
    background: #0047ff;
    box-shadow: 1px 2px 2px 0px rgba(205, 216, 219, 0.5);
    color: #fff;
    text-align: center;
    font-family: Pretendard;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  p {
    color: #000;
    font-family: Pretendard;
    font-size: 0.6875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-top: 2rem;
  }
  span {
    color: #000;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  #levelupButton {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 9.1875rem;
    height: 3.3125rem;
    flex-shrink: 0;
    border-radius: 0.3125rem;
    background: #ff8a00;
    color: #fff;
    text-align: center;
    font-family: Pretendard;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 2.06rem;
  }
`;

const OtherMission = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: 25rem;
  background: #f1f5f8;
  #othermissions {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding-top: 3.12rem;
    gap: 1.5rem;
  }
`;
