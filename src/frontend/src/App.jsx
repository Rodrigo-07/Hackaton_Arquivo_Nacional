import './index.css';
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './pages/home/home';
import PerfilPage from './pages/perfil/perfil';
import CommentCard from './components/comments_card/comments_card';
import CompetitionsPage from './pages/competitions/competitions';

import Header from './components/header/header';
import BottomBar from './components/bottom_bar/bottom_bar';


let competitionsData = [{
  "date"  : "02/05/1994",
  "title" : "BANANA",
  "description" : "BANANAAAAAAAAAAAAAAAAAAAAAAAAAAAAAssssssssssssssssssssssssssssssssssssssss"
}]

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/comments' element={<CommentCard/>}/>
        <Route path='/competitions' element={<CompetitionsPage competitions={competitionsData} />} />
        <Route path='/user_perfil' element={<PerfilPage/>} />
      </Routes>
    </BrowserRouter>
    <BottomBar/>
    </div>
  );
}

export default App;
