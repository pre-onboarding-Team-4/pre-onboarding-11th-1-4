import styled from 'styled-components';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export default function Header() {
	const navigate = useNavigate();
	return (
		<>
			<ToastContainer hideProgressBar={true} autoClose={1500} position="top-center" />
			<StyledHeader>
				<span>Wanted-Pre-Onboarding-Frontend</span>
				<div className="button-container">
					<Button
						onClick={() => {
							navigate('/todo');
						}}
					>
						투두
					</Button>
					<Button
						onClick={() => {
							navigate('/signin');
						}}
					>
						로그인
					</Button>
					<Button
						onClick={() => {
							navigate('/signup');
						}}
					>
						회원가입
					</Button>
					<Button
						onClick={() => {
							if (localStorage.getItem('accessToken')) {
								localStorage.clear();
								navigate('/');
								toast.success('로그아웃 되었습니다.');
							}
						}}
					>
						로그아웃
					</Button>
				</div>
			</StyledHeader>
		</>
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
