import React from 'react';
import { styled } from 'styled-components';

export default function ToastList({ children }) {
  return <StyledToastList>{children}</StyledToastList>;
}

export const StyledToastList = styled.ul`
  position: fixed;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  margin: 0;
  list-style: none;
`;
