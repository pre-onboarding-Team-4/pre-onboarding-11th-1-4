import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function UserSignInput(props: InputProps) {
	return <StyledInput {...props} />;
}

const StyledInput = styled.input`
	width: 500px;
	height: 30px;
	border: 1px solid;
	border-radius: 4px;
	border-color: #333;
`;
