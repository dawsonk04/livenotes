import React, { useState } from 'react';
import './App.css';

function App() {
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  return (
    <div className="App bg-gray-100 min-h-screen">
      <nav className="bg-white shadow-md p-4 flex justify-end">
        <button
          className="text-gray-800 font-semibold hover:text-blue-500 mr-4"
          onClick={() => openModal('login')}
        >
          Log In
        </button>
        <button
          className="text-gray-800 font-semibold hover:text-blue-500"
          onClick={() => openModal('signup')}
        >
          Sign Up
        </button>
      </nav>

      <div className="flex items-center justify-center h-full">
        <header className="bg-white shadow-md rounded-lg p-8 max-w-lg text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">NotesApp</h1>
          <p className="text-lg text-gray-600 mb-2">Live note-taking application.</p>
          <p className="text-lg text-gray-600">Recieve real-time feedback on your notes.</p>
        </header>
      </div>

      {modalType && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4">
              {modalType === 'signup' ? 'Sign Up' : 'Log In'}
            </h2>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <button className="w-full bg-blue-500 text-white p-2 rounded mb-2">
              Continue with Email
            </button>
            <button className="w-full bg-red-500 text-white p-2 rounded">
              Continue with Google
            </button>
            <button
              className="mt-4 text-gray-500 hover:text-gray-800"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
