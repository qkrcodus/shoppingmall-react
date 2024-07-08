import React from 'react'
import {Outlet} from 'react-router-dom'
import {useParams} from 'react-router-dom'
const Detail = (props) => {
    let {id}=useParams();
    let 찾는상품=props.shoes.find(function(x){return x.id==(id-1)})

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
</div> 
  )
}

export default Detail