import React from 'react';
import styled from 'styled-components';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function ActionButton(props: ButtonProps) {
	return <StyledButton {...props}>{props.children}</StyledButton>;
}

const StyledButton = styled.button`
	width: 50px;
	height: 20px;
	border-radius: 4px;
	border: none;
	cursor: pointer;
`;
