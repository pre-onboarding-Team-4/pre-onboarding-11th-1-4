import { Navigate } from 'react-router-dom';

export default function Main() {
	return localStorage.accessToken ? <Navigate to="/todo" /> : <Navigate to="/signin" />;
}
