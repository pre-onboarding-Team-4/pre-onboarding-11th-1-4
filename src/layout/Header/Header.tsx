import styled from 'styled-components';
import { Button } from '../../components/Button';

export default function Header() {
	return (
		<StyledHeader>
			<span>Wanted-Pre-Onboarding-Frontend</span>
			<div className="button-container">
				<Button>홈</Button>
				<Button>로그인</Button>
				<Button>회원가입</Button>
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
