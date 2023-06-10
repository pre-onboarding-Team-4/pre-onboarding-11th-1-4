import styled from 'styled-components';
import { HeaderButton } from '../../components/HeaderButton';

export default function Header() {
	return (
		<StyledHeader>
			<span>Wanted-Pre-Onboarding-Frontend</span>
			<div className="button-container">
				<HeaderButton>로그인</HeaderButton>
				<HeaderButton>회원가입</HeaderButton>
			</div>
		</StyledHeader>
	);
}

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	margin: 30px 80px;
	font-size: 24px;
	.button-container {
		display: flex;
		gap: 30px;
	}
`;
