import React from 'react';
import ToastsContextProvier from './ToastContext';
import Component from './Component';

function App() {
  return (
    <ToastsContextProvier>
      <Component />
    </ToastsContextProvier>
  );
}

export default App;
