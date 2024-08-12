import * as styled from 'styled-components';

export const GlobalFont = styled.createGlobalStyle`
  @font-face {
    font-family: 'Jalnan';
    font-weight: normal;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/goodchoice/Jalnan.eot');
    src:
      url('https://cdn.jsdelivr.net/gh/webfontworld/goodchoice/Jalnan.eot?#iefix')
        format('embedded-opentype'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/goodchoice/Jalnan.woff2') format('woff2'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/goodchoice/Jalnan.woff') format('woff'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/goodchoice/Jalnan.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 900;
    font-display: swap;
    src:
      local('Pretendard Black'),
      url('./Pretendard-Black.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 800;
    font-display: swap;
    src:
      local('Pretendard ExtraBold'),
      url('./Pretendard-ExtraBold.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    font-display: swap;
    src:
      local('Pretendard Bold'),
      url('./Pretendard-Bold.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    font-display: swap;
    src:
      local('Pretendard SemiBold'),
      url('./Pretendard-SemiBold.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    font-display: swap;
    src:
      local('Pretendard Medium'),
      url('./Pretendard-Medium.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-display: swap;
    src:
      local('Pretendard Regular'),
      url('./Pretendard-Regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    font-display: swap;
    src:
      local('Pretendard Light'),
      url('./Pretendard-Light.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 200;
    font-display: swap;
    src:
      local('Pretendard ExtraLight'),
      url('./Pretendard-ExtraLight.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 100;
    font-display: swap;
    src:
      local('Pretendard Thin'),
      url('./Pretendard-Thin.woff') format('woff');
  }
`;
