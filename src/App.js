import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ToDoPage from './pages/ToDoPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/signup' element={<SignUpPage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/todo' element={<ToDoPage />}/>
      </Routes>
    </div>
  );
}

export default App;
