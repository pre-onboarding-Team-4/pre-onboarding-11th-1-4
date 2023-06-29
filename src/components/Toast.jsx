import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

/* eslint-disable react/prop-types */
export default function Toast({ children, type }) {
  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return isShown ? (
    <StyledToastWrapper>
      <StyledToast type={type || 'none'}>{children}</StyledToast>
    </StyledToastWrapper>
  ) : null;
}

const styles = {
  warn: {
    backgroundColor: '#b94530',
    color: 'var(--color-white)',
  },
  success: {
    backgroundColor: '#2BAF1B',
    color: 'var(--color-white)',
  },
  none: {
    backgroundColor: 'var(--color-white)',
    color: 'var(--color-black)',
  },
};

export const StyledToast = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  padding: 20px 20px;
  background-color: ${({ type }) => styles[type].backgroundColor};
  color: ${({ type }) => styles[type].color};
  box-shadow: 3px 3px 3px 1px #bcbcbc;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  90% {
    height: fit-content;
    opacity: 1;
    transform: translateY(-20px);
  }

  100%{
    opacity: 0;
    height: 0;
    transform: translateY(-50px);
  }
`;

export const StyledToastWrapper = styled.li`
  animation: ${fadeIn} 3s forwards;
`;
