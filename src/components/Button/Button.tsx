import React, { ReactNode } from 'react';
import styled from 'styled-components';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {
	return <StyledButton {...props}>{props.children}</StyledButton>;
}

const StyledButton = styled.button`
	width: 80px;
	height: 30px;
	border-radius: 4px;
	border: 1px solid;
	background-color: #fff;
	cursor: pointer;
`;
