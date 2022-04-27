import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Sidebar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
