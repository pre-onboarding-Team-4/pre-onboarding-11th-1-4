import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Container>
      <ErrorMessage>PAGE NOT FOUND</ErrorMessage>
      <ErrorCode>404</ErrorCode>
      <ErrorMessage>요청한 페이지를 찾을 수 없습니다.</ErrorMessage>
      <Link to="/">이전 페이지</Link>
    </Container>
  );
}

export default NotFound;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;
const ErrorCode = styled.h1`
  font-size: 100px;
  margin: 0;
`;
const ErrorMessage = styled.h2`
  margin: 0;
`;
