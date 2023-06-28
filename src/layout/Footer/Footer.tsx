import React from 'react';
import styled from 'styled-components';

export default function Footer() {
	return (
		<StyledFooter>
			<span>Wanted-Pre-Onboarding-Frontend-Assignment</span>
			<br />
			<span>© 2023 JYROH, All rights reserved.</span>
		</StyledFooter>
	);
}

const StyledFooter = styled.footer`
	margin-top: 80px;
	display: flex;
	flex-direction: column;
	align-items: center;
	span {
		&:first-child {
			font-size: 20px;
		}
	}
`;
