import React, { ReactNode } from 'react';
import styled from 'styled-components';

type ButtonProps = {
	children: ReactNode;
};

export default function Button({ children }: ButtonProps) {
	return <StyledButton>{children}</StyledButton>;
}

const StyledButton = styled.button`
	width: 80px;
	height: 30px;
	border-radius: 4px;
	border: 1px solid;
	background-color: #fff;
	cursor: pointer;
`;
