import { Container, Navbar ,Nav } from 'react-bootstrap';
import React from 'react'
import './App.css'
import Shoes from './Shoes.jsx';
import { useState } from 'react';
import {Routes, Link, Route,Outlet} from 'react-router-dom'
import Detail from './Detail.jsx';
import data from './data.js';
import axios from 'axios';
const App = () => {
  let [shoes,setShoes]=useState(data);
  let [clickCount,setClickCount]=useState(0);

  let handleBtnClick=()=>{
    if(clickCount==0){
      axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((결과)=>{
          let copy=[...shoes,...결과.data]
          setShoes(copy)
          console.log(copy)
        })
        .catch(()=>{
          console.log('실패')
        })
    }
    else if(clickCount==1){
      axios.get('https://codingapple1.github.io/shop/data3.json')
        .then((결과)=>{
          let copy=[...shoes,...결과.data]
          setShoes(copy)
          console.log(copy)
        })
        .catch(()=>{
          console.log(clickCount)
          console.log('실패')
        })
    }
    else {
      alert('더 이상 불러올 데이터가 없습니다.')
    }
    setClickCount(clickCount+1);
  }
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
              <Shoes shoes={shoes}/>
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
    <button onClick={handleBtnClick}> 더보기 </button>
    </>
  )
}

export default App