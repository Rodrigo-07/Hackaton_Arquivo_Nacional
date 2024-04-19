import './index.css';
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './pages/home/home';
import PerfilPage from './pages/perfil/perfil';
import CommentCard from './components/comments_card/comments_card';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/user_perfil' element={<PerfilPage/>} />
        <Route path='/comments' element={<CommentCard/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
