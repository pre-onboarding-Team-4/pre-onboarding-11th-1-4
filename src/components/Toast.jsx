import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

/* eslint-disable react/prop-types */
export default function Toast({ children }) {
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
      <StyledToast>{children}</StyledToast>
    </StyledToastWrapper>
  ) : null;
}

export const StyledToast = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  padding: 20px 20px;
  background-color: #b94530;
  color: white;
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
