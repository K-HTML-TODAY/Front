import { Link } from 'react-router-dom';
import { MissionButton, MissionListBox, MissionListLayout } from './styles';
import { MissionListType } from './types';

export default function MissionList({ type, title, description, link }: MissionListType) {
  return (
    <MissionListLayout>
      <MissionListBox>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </MissionListBox>
      <Link to={link}>
        <MissionButton type={type}>하러 가기</MissionButton>
      </Link>
    </MissionListLayout>
  );
}
