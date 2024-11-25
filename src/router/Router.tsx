import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';
import RankingTest from '../test/RankingTest';
import Login from '../pages/login/Login';
import Splash from '../pages/splash/Splash';
import Signup from '../pages/signup/Signup';
import MissionListTest from '../test/MissionTest';
import MainPage from '../pages/main/MainPage';
import JobPage from '../pages/job/JobPage';
import Mypage from '../pages/mypage/Mypage';
import AIwriting from '../pages/aiwriting/AIwriting';
import AIresult from '../pages/airesult/AIresult';
import MissionBoxTest from '../test/MissionBoxTest';
import AImission from '../pages/aimission/AImission';
import AIsuccess from '../pages/aisuccess/AIsuccess';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Splash />,
        },
        {
          path: 'main',
          element: <MainPage />,
        },
        {
          path: 'job',
          element: <JobPage />,
        },
      ],
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
      path: '/mission',
      element: <AImission />,
    },
    {
      path: '/mission',
      children: [
        {
          path: 'aiwrite',
          element: <AIwriting />,
        },
        {
          path: 'airesult',
          element: <AIresult />,
        },
        {
          path: 'aisuccess',
          element: <AIsuccess />,
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
          path: 'missionBox',
          element: <MissionBoxTest />,
        },
      ],
    },
  ],
  {
    basename: '/Front',
  },
);

export default router;
