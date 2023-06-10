import React from 'react';
import { GlobalStyle } from './common/GlobalStyle/GlobalStyle';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';

function App() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default App;
