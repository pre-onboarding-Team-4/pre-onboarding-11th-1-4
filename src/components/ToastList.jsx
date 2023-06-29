import React from 'react';
import { styled } from 'styled-components';

/* eslint-disable react/prop-types */
export default function ToastList({ children }) {
  return <StyledToastList>{children}</StyledToastList>;
}

export const StyledToastList = styled.ul`
  position: fixed;
  top: 50px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;