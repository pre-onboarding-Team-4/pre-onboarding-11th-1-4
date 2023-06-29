import React, { useState } from 'react';
import Toast from './Toast';

function App() {
  const [toast, setToast] = useState({ message: '', index: 0 });

  return (
    <div
      className="App"
      style={{
        width: 500,
        height: 300,
        color: 'pink',
        backgroundColor: 'black',
        margin: '300px auto',
        position: 'relative',
      }}
    >
      <button
        type="button"
        onClick={() => {
          setToast({ message: `${toast.index + 1}번 메시지`, index: toast.index + 1 });
        }}
      >
        새로운 토스트 출력
      </button>
      <h1>토스트를 출력하려고합니다!</h1>
      {toast.message && <Toast>{toast.message}</Toast>}
    </div>
  );
}

export default App;
