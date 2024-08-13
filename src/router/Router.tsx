import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';
import RankingTest from '../test/RankingTest';
import MissionTest from '../test/MissionTest';
import ProgramBoxTest from '../test/ProgramBoxTest';
import Login from '../pages/login/Login';
import Splash from '../pages/splash/Splash';
import Signup from '../pages/signup/Signup';
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
  {
    path: '/test',
    children: [{ path: 'mission', element: <MissionTest /> }],
  },
  {
    path: '/test',
    children: [{ path: 'programbox', element: <ProgramBoxTest /> }],
  },
]);

export default router;
