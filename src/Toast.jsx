import React from 'react';
import { createPortal } from 'react-dom';
import styled, { keyframes } from 'styled-components';

export default function Toast({ children }) {
  return createPortal(<StyledToast>{children}</StyledToast>, document.getElementById('toast'));
}

// eslint-disable-next-line react/prop-types
// export default function Toast({ children }) {
//   return <StyledToast>{children}</StyledToast>;
// }

const fadeIn = keyframes`
  0% {
    opacity: 0.5;
    transform: translateY(0px);
  }

  60% {
    opacity: 1;
    transform: translateY(-30px);
  }

  100% {
    opacity: 0;
    transform: translateY(-30px);
  }
`;

export const StyledToast = styled.div`
  width: fit-content;
  padding: 20px 30px;
  position: absolute;
  top: 30px;
  right: 0px;
  background-color: #b94530;
  color: white;
  animation: ${fadeIn} 1s forwards;
`;
