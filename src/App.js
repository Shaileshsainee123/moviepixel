import React from 'react';
import './App.css';
import SingleMovie from './SingleMovie';
import Home from './Home';
import Error from './Error';
import {Routes , Route} from "react-router-dom";  

const App= () => {
  return (
   <>
   
   <Routes>
    <Route path="/" element={<Home /> }/>
    <Route path="movie/:id" element={<SingleMovie /> }/>
    <Route path='*'  element={<Error />} />

   </Routes>
   
   </>
  );
}

export default App;
