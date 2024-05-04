import React from 'react';
import Newcard from './Newcard';
import './Tab.css';

const Card = () => {

  const data = [
    {
      id:1,
      price:'$40.00 - $80.00',
      title:'DATA SCIENCE',
      image:'/1.png',
      description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    },
    {
      id:2,
      price:'$20.00 $18.00',
      title:'FULL STACK DEVELOPMENT',
      image:'/2.jpg',
      description:'This card has supporting text below as a natural lead-in to additional content.'
    },
    {
      id:3,
      price:'$50.00 $25.00',
      title:'DATA SCIENCE',
      image:'/datascience.jpg',
      description:'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.'
    },
    {
      id:4,
      price:'$40.00',
      title:'CYBER SECURITY',
      image:'/cyber.jpg',
      description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    },
    {
      id:5,
      price:'$40.00',
      title:'CAREER',
      image:'/c1.jpg',
      description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    },
  ]
  
  return (
    <div className='nav'>
    <ul className="nav nav-pills mb-3"  id="pills-tab" role="tablist" style={{margin:'10px 200px 50px 450px',}}>
      <li className="nav-item" role="presentation">
        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">ALL</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">FULL STACK DEVLOPMENT </button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">DATA SCIENCE</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link" id="pills-career-tab" data-bs-toggle="pill" data-bs-target="#pills-cyber" type="button" role="tab" aria-controls="pills-cyber" aria-selected="false" >CYBER SECURITY</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link" id="pills-career-tab" data-bs-toggle="pill" data-bs-target="#pills-career" type="button" role="tab" aria-controls="pills-career" aria-selected="false" >CAREER</button>
      </li>
    </ul>
<div className="tab-content" id="pills-tabContent" >
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">

      <Newcard data={data} title={data[0].title} price = {data[0].price}  description = {data[0].description} image = {data[0].image} />
      <Newcard data={data} title={data[1].title} price = {data[1].price}  description = {data[1].description} image = {data[1].image}/>
      <Newcard data={data} title={data[2].title} price = {data[2].price}  description = {data[2].description} image = {data[2].image} />
      <Newcard data={data} title={data[3].title} price = {data[3].price}  description = {data[3].description} image = {data[3].image} />

      <Newcard data={data} title={data[4].title} price = {data[4].price}  description = {data[4].description} image = {data[4].image} />
      

  </div>
  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
    
  <Newcard data={data} title={data[1].title} price = {data[1].price}  description = {data[1].description} image = {data[1].image}/>

  </div>
  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
  <Newcard data={data} title={data[2].title} price = {data[2].price}  description = {data[2].description} image = {data[2].image} />

  </div>
  <div className="tab-pane fade" id="pills-cyber" role="tabpanel" aria-labelledby="pills-cyber-tab" tabIndex="0">
      <Newcard data={data} title={data[3].title} price = {data[3].price}  description = {data[3].description} image = {data[3].image} />

  </div>
  <div className="tab-pane fade" id="pills-career" role="tabpanel" aria-labelledby="pills-career-tab" tabIndex="0">
      <Newcard data={data} title={data[4].title} price = {data[4].price}  description = {data[4].description} image = {data[4].image} />

  </div>
 
  
</div>
    </div>
  )
}

export default Card
