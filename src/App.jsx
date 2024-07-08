import { Container, Navbar ,Nav } from 'react-bootstrap';
import React from 'react'
import './App.css'
import Shoes from './Shoes.jsx';
import { useState } from 'react';
import {Routes, Link, Route,Outlet} from 'react-router-dom'
import Detail from './Detail.jsx';
import data from './data.js';

const App = () => {
  let [shoes]=useState(data)
  return (
    <>
    <Navbar bg="light" data-bs-theme="light">
    <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">메인페이지</Nav.Link>
            <Nav.Link as={Link} to="/detail">상세페이지</Nav.Link>
          </Nav>
    </Container>
    </Navbar>
    <Routes>
      <Route path="/" element={
        <>
          <div className='main-bg'></div>
          <div className="container">
            <div className="row">
              <Shoes/>
            </div>
          </div>
        </>
      }/>

      <Route path="/detail/:id" element={
        <>
        <Detail shoes={shoes}/>
        </>
      }/>
  

      <Route path='*' element={<div>404 페이지</div>}/>

      <Route path="/event" element={
        <>
        <h1>오늘의 이벤트</h1>
        <Outlet></Outlet>
        </>
      }>
        <Route path="1" element={<div>1만원 할인쿠폰</div>}/>
        <Route path="2" element={<div>2만원 할인쿠폰</div>}/>
      </Route>
      
    </Routes>

    </>
  )
}

export default App