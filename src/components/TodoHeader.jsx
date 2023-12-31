import React from 'react';
import { styled } from 'styled-components';
import { FaPowerOff } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import useToast from '../hooks/useToast';

export default function TodoHeader() {
  const navigate = useNavigate();
  const createToast = useToast();
  const handleLogout = () => {
    localStorage.removeItem('access_token');
    createToast({ message: '성공적으로 로그아웃 되었습니다.', type: 'success' });
    navigate('/signin');
  };
  return (
    <Header>
      <Title lang="en">ToDo List</Title>
      <LogoutBtn type="LogoutBtn" aria-label="로그아웃" onClick={handleLogout}>
        <FaPowerOff />
      </LogoutBtn>
    </Header>
  );
}

const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 16px 0;
  background: var(--color-primary);
  color: var(--color-white);
`;

const Title = styled.h1`
  margin: 0;
`;

const LogoutBtn = styled.button`
  position: absolute;
  width: 44px;
  height: 44px;
  top: 15px;
  right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: var(--color-white);
  background-color: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;
