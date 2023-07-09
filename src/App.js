import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Post from './components/post/Post';
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import { Divider, Row } from 'antd';

const App = () => {
  
  return (
    <Row>
      <NavBar />
      <Divider />
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/post/:id" element={<Post />} /> 
        </Routes>
      </BrowserRouter>

      </Row>
  );
};

export default App;
