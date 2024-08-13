import { NavigationBar, NavigationBigItem, NavigationItem, NavigationLayout } from './styles';
import { ReactComponent as Navigation_home } from '../../assets/images/navigation_home.svg';
import { ReactComponent as Navigation_mission } from '../../assets/images/navigation_mission.svg';
import { ReactComponent as Navigation_user } from '../../assets/images/navigation_user.svg';
import { ReactComponent as Mission_blue } from '../../assets/images/mission_blue.svg';
import { ReactComponent as Mission_white } from '../../assets/images/mission_white.svg';
import { ReactComponent as User_blue } from '../../assets/images/user_blue.svg';
import { ReactComponent as User_white } from '../../assets/images/user_white.svg';
import { ReactComponent as Home_white } from '../../assets/images/home_white.svg';
import { ReactComponent as Home_blue } from '../../assets/images/home_blue.svg';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();

  return (
    <NavigationLayout>
      {location.pathname.startsWith('/mission') || location.pathname === '/job' ? (
        <Navigation_mission />
      ) : location.pathname === '/mypage' ? (
        <Navigation_user />
      ) : (
        <Navigation_home />
      )}

      <NavigationBar $location={location.pathname}>
        {/* 미션 아이콘 및 텍스트 */}
        {location.pathname.startsWith('/mission') || location.pathname === '/job' ? (
          <NavigationBigItem as={Link} to="/mission">
            <div>
              <Mission_white />
            </div>
            <span>미션</span>
          </NavigationBigItem>
        ) : (
          <NavigationItem as={Link} to="/mission">
            <Mission_blue />
            <span>미션</span>
          </NavigationItem>
        )}

        {/* 홈 아이콘 및 텍스트 */}
        {location.pathname === '/' ? (
          <NavigationBigItem as={Link} to="/">
            <div>
              <Home_white />
            </div>
            <span>홈</span>
          </NavigationBigItem>
        ) : (
          <NavigationItem as={Link} to="/">
            <Home_blue />
            <span>홈</span>
          </NavigationItem>
        )}

        {/* 내정보 아이콘 및 텍스트 */}
        {location.pathname === '/mypage' ? (
          <NavigationBigItem as={Link} to="/mypage">
            <div>
              <User_white />
            </div>
            <span>내정보</span>
          </NavigationBigItem>
        ) : (
          <NavigationItem as={Link} to="/mypage">
            <User_blue />
            <span>내정보</span>
          </NavigationItem>
        )}
      </NavigationBar>
    </NavigationLayout>
  );
}
