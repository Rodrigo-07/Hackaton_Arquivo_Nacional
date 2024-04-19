import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import CommentCard from './components/comments_card/comments_card';
import HomePage from './pages/home/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/comments' element={<CommentCard/>}/> */}
        <Route path='/' element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
