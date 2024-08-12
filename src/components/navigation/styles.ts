import styled from 'styled-components';

export const NavigationLayout = styled.div`
  width: 26.0625rem;
  height: 6.4375rem;
  display: flex;
  align-items: flex-end;
  position: relative;

  > svg {
    position: absolute;
  }
`;

export const NavigationBar = styled.div<{ location: string }>`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: transparent;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: ${({ location }) =>
    location === '/' ? '4.56rem' : location === '/mission' ? '5.6rem' : '5.7rem'};
`;

export const NavigationItem = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.88rem 0 0.81rem;

  span {
    color: #47bdff;
    text-align: center;
    font-size: 0.6875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const NavigationBigItem = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.69rem;

  div {
    width: 3.75rem;
    height: 3.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0047ff;
    border-radius: 50%;
  }

  span {
    color: #0047ff;
    text-align: center;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
