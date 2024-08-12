import {
  RankingBox,
  RankingContent,
  RankingLayout,
  RankingLogo,
  RankingNumber,
  RankingText,
} from './styles';
import { RankingType } from './types';
import { ReactComponent as One } from '../../assets/images/1.svg';
import { ReactComponent as Two } from '../../assets/images/2.svg';
import { ReactComponent as Three } from '../../assets/images/3.svg';

const getImagePath = (number: number) => {
  switch (number) {
    case 1:
      return <One />;
    case 2:
      return <Two />;
    case 3:
      return <Three />;
    default:
      return <></>;
  }
};

export default function Ranking({ number }: RankingType) {
  return (
    <RankingLayout $number={number}>
      <RankingBox>
        <RankingNumber $number={number}>{getImagePath(number)}</RankingNumber>
        <RankingContent>
          <RankingLogo></RankingLogo>
          <RankingText $number={number}>
            <h5>LV.10</h5>
            <h1>경비니</h1>
          </RankingText>
        </RankingContent>
      </RankingBox>
    </RankingLayout>
  );
}
