 import React from 'react';
 
 const Newcard = (props) => {

 

   return (
 
    <div class="row row-cols-1 row-cols-md-3 g-3"  style={{margin:'10px 100px 50px 50px'}}>
    <div class="col" >
      <div class="card" style={{width:'400px'}}>
      <img className='product-image' style={{width:'400px'}} src={props.image}></img>
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.price}</p>
          <p class="card-text">{props.description}</p>
          
       
        </div>
     </div>
  </div>
    <div class="col">
    <div class="card" style={{width:'400px',paddig:'250px'}}>
    <img className='product-image' style={{width:'400px'}} src={props.image}></img>
       <div class="card-body">
         <h5 class="card-title">{props.title}</h5>
         <p class="card-text">{props.price}</p>
         <p class="card-text">{props.description}</p>
        
       </div>
    </div>
    </div>
    <div class="col">
    <div class="card" style={{width:'400px',paddig:'250px'}}>
    <img className='product-image' style={{width:'400px'}} src={props.image}></img>
       <div class="card-body">
      
         <h5 class="card-title">{props.title}</h5>
         <p class="card-text">{props.price}</p>
         <p class="card-text">{props.description}</p>
  
       
       </div>
    </div>
    </div>
    <div class="col">
    <div class="card" style={{width:'400px',paddig:'250px'}}>
    <img className='product-image' style={{width:'400px'}} src={props.image}></img>
       <div class="card-body">
         <h5 class="card-title">{props.title}</h5>
         <p class="card-text">{props.price}</p>
         <p class="card-text">{props.description}</p>
      
       </div>
    </div>
    </div>
    <div class="col">
    <div class="card" style={{width:'400px',paddig:'250px'}}>
    <img className='product-image' style={{width:'400px'}} src={props.image}></img>
       <div class="card-body">
         <h5 class="card-title">{props.title}</h5>
         <p class="card-text">{props.price}</p>
         <p class="card-text">{props.description}</p>
        
       </div>
    </div>
    </div>
    <div class="col">
    <div class="card" style={{width:'400px',paddig:'250px'}}>
    <img className='product-image' style={{width:'400px'}} src={props.image}></img>
       <div class="card-body">
         <h5 class="card-title">{props.title}</h5>
         <p class="card-text">{props.price}</p>
         <p class="card-text">{props.description}</p>
  
         
       </div>
    </div>
    </div>
    
  </div>
   
   )
 }
 
 export default Newcard;
 