import React from 'react'
import data from './data.js'
import { useState } from 'react'
import {Link} from 'react-router-dom'

const Shoes = (props) => {
  return (
    <>
    {props.shoes.map(function(a,i){
        return(
          <div className="col-md-4" key={i}>
            <Link to={'/detail/'+(i+1)}>
              <img src={'https://codingapple1.github.io/shop/shoes'+(i+1)+'.jpg'} width="80%" />
              <h4>{props.shoes[i].title}</h4>
              <p>{props.shoes[i].price}</p>
            </Link>
          </div>
        )     
    })
    }
    
    </>
  )
}

export default Shoes