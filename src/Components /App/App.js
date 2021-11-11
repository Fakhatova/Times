import './App.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Article from '../Article/Article';
import {Route, Routes} from 'react-router-dom';
import { useState } from 'react';

const  App = () => {
  const [topArticles, setTopArticles] = useState()
  const [category, setCategory] = useState('home')
  const [copyright, setCopyRight] = useState('Copyright (c) 2021 The New York Times Company. All Rights Reserved.')

  const handleClick = (val) => {
    setCategory(val)
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
        <>
        <NavBar setTopArticles={setTopArticles} handleClick={handleClick} category={category} setCopyRight={setCopyRight} /> 
        <Article topArticles={topArticles} /> 
        <Footer copyRights={copyright}/>
        </>
      }/>
      </Routes>
    </div>
  );
}

export default App;
