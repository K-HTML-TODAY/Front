import styled from 'styled-components';

export const NavigationLayout = styled.div`
  display: block;
  align-items: flex-end;
  overflow-x: hidden;
  max-width: 24.375rem;

  > svg {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const NavigationBar = styled.div<{ $location: string }>`
  width: 100%;
  height: 7.5rem;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: transparent !important;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: ${({ $location }) =>
    $location === '/'
      ? '4.56rem'
      : $location === '/mission' || $location === '/job'
        ? '5.6rem'
        : '5.7rem'};
  padding: 0 0.5rem;
`;

export const NavigationItem = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 0.25rem;
  padding: 1rem 0 0.5rem;

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
  justify-content: flex-end;
  gap: 0.5rem;
  padding: 0 0 0.5rem;

  div {
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0047ff;
    border-radius: 50%;
  }

  span {
    color: #0047ff;
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
