import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 48px 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TodoTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <Root>
      <Wrap>{children}</Wrap>
    </Root>
  );
};

export default TodoTemplate;
