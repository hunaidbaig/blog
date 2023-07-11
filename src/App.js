import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Post from './components/post/Post';
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import { Divider, Row } from 'antd';
import SearchHotel from './components/search-hotel/SearchHotel';

import Styles from './App.module.css'

const App = () => {
  
  return (
    <Row className={Styles.app}>
      <NavBar />
      <Divider />
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<SearchHotel />} />
          <Route  path="/search" element={<Home />} /> 
        </Routes>
      </BrowserRouter>

      </Row>
  );
};

export default App;
