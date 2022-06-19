import React from 'react';
import {BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import DetailPage from './pages/DetailPage';
import IndexPage from './pages/indexPage';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import "./Transition.css"



function App() {
  
  const location = useLocation();

  return (
  
    <TransitionGroup >
      <CSSTransition
        key={location.pathname}
        classNames={"right"}
        timeout={300}
      >
          <Routes location={location}>
            <Route path ='/' element={<IndexPage/>}/>
            <Route path ='/:id' element={<DetailPage/>}/>
          </Routes>
      </CSSTransition>
    </TransitionGroup>
 
  );
}

export default App;
