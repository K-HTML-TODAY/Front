import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';
import Test2 from '../test/Test2';
import RankingTest from '../test/RankingTest';
import MissionListTest from '../test/MissionTest';
import MainPage from '../pages/main/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
    ],
  },
  {
    path: '/test',
    children: [
      {
        path: 'ranking',
        element: <RankingTest />,
      },
      {
        path: 'missionList',
        element: <MissionListTest />,
      },
      {
        path: '2',
        element: <Test2 />,
      },
    ],
  },
]);

export default router;
