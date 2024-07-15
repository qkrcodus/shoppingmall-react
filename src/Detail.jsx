import React, { useState } from 'react'
import {Outlet} from 'react-router-dom'
import {useParams } from 'react-router-dom'
import { useEffect} from 'react'
import {Nav} from 'react-bootstrap';

const Detail = (props) => {
    let [탭, 탭변경]=useState(0);
    let [state,setState]=useState(true);
    let [num,setNum]=useState('');
    let {id}=useParams();
    let 찾는상품=props.shoes.find(function(x){return x.id==(id-1)})
    useEffect(()=>
      {
        let a =setTimeout(()=>setState(false),2000)
        return()=>{
          clearTimeout(a)
        }
      },[])
      
    useEffect(()=>{
        if (isNaN(num)==true){
          alert('다시 입력해')
        }
      },[num]
      )
      function TabContent(){
        if(탭==0){
          return <div>내용 0</div>
        }
        if(탭==1){
          return <div>내용 1</div>
        }
        if(탭==2){
          return <div>내용 3</div>
        }
      }
  return (
<div className="container">
  <div className="row">
    <div className="col-md-6">
      <img src={'https://codingapple1.github.io/shop/shoes'+(id)+'.jpg'} width="100%" />
    </div>
    <div className="col-md-6">
      <h4 className="pt-5">{찾는상품.title}</h4>
      <p>{찾는상품.content}</p>
      <p>{찾는상품.price}</p>
      <button className="btn btn-danger">주문하기</button> 
    </div>
  </div>
  <Outlet></Outlet>
  {
    state==true ?  
    <div className="alert alert-warning">
    2초이내 구매시 할인 </div> 
    : null
  }
  <input onChange={(e)=>{setNum(e.target.value)}}></input>
  <Nav variant="tabs"  defaultActiveKey="link0">
    <Nav.Item>
      <Nav.Link onClick={()=>{탭변경(0)}} eventKey="link0">버튼0</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link onClick={()=>{탭변경(1)}} eventKey="link1">버튼1</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link onClick={()=>{탭변경(2)}} eventKey="link2">버튼2</Nav.Link>
    </Nav.Item>
</Nav>
<TabContent/>

</div> 

  )
}

export default Detail