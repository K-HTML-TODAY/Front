import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';
import RankingTest from '../test/RankingTest';
import Login from '../pages/login/Login';
import Splash from '../pages/splash/Splash';
import Signup from '../pages/signup/Signup';
import MissionListTest from '../test/MissionTest';
import MissionBoxTest from '../test/MissionBoxTest';
import ProgramBoxTest from '../test/ProgramBoxTest';
import Mypage from '../pages/mypage/Mypage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/splash',
    element: <Splash />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/mypage',
    element: <Mypage />,
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
        path: 'missionBox',
        element: <MissionBoxTest />,
      },
      {
        path: 'programBox',
        element: <ProgramBoxTest />,
      },
    ],
  },
]);

export default router;
