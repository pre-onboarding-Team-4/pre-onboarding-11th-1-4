import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error } from './pages/Error';
import { Main } from './pages/Main';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';

const router = createBrowserRouter([
	{
		path: '/',
		element: [<App />],
		errorElement: <Error />,
		children: [
			{ index: true, element: <Main /> },
			{ path: '/signin', element: <Signin /> },
			{ path: '/signup', element: <Signup /> },
			// { path: '/all', element: <ALL /> },
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<RouterProvider router={router} />);
