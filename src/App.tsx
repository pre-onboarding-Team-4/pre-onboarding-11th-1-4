import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="" element={} /> */}
        <Route path="" element={<Signin />} />
        <Route path="" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
