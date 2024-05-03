 import React from 'react';
 
 const Newcard = (props) => {

 

   return (
 
    <div className="row row-cols-1 row-cols-md-3 g-3"  style={{margin:'10px 100px 50px 50px'}}>
    <div className="col" >
      <div className="card" style={{width:'400px'}}>
      <img className='product-image' style={{width:'400px'}} src={props.image}></img>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.price}</p>
          <p className="card-text">{props.description}</p>
          <a href="#" className="card-link">Card link</a><br></br>
         <a href="#" className="card-link">Card link</a>
         <a href="#" className="card-link" style={{float:'right'}}>Another link</a>
          
       
        </div>
     </div>
  </div>
    <div className="col">
    <div className="card" style={{width:'400px',paddig:'250px'}}>
    <img className='product-image' style={{width:'400px'}} src={props.image}></img>
       <div className="card-body">
         <h5 className="card-title">{props.title}</h5>
         <p className="card-text">{props.price}</p>
         <p className="card-text">{props.description}</p>
         <a href="#" className="card-link">Card link</a><br></br>
         <a href="#" className="card-link">Card link</a>
         <a href="#" className="card-link" style={{float:'right'}}>Another link</a>
        
       </div>
    </div>
    </div>
    <div className="col">
    <div className="card" style={{width:'400px',paddig:'250px'}}>
    <img className='product-image' style={{width:'400px'}} src={props.image}></img>
       <div className="card-body">
      
         <h5 className="card-title">{props.title}</h5>
         <p className="card-text">{props.price}</p>
         <p className="card-text">{props.description}</p>
  
         <a href="#" className="card-link">Card link</a><br></br>
         <a href="#" className="card-link">Card link</a>
         <a href="#" className="card-link" style={{float:'right'}}>Another link</a>
       </div>
    </div>
    </div>
    <div className="col">
    <div className="card" style={{width:'400px',paddig:'250px'}}>
    <img className='product-image' style={{width:'400px'}} src={props.image}></img>
       <div className="card-body">
         <h5 className="card-title">{props.title}</h5>
         <p className="card-text">{props.price}</p>
         <p className="card-text">{props.description}</p>
         <a href="#" className="card-link">Card link</a><br></br>
         <a href="#" className="card-link">Card link</a>
         <a href="#" className="card-link" style={{float:'right'}}>Another link</a>
      
       </div>
    </div>
    </div>
    <div className="col">
    <div className="card" style={{width:'400px',paddig:'250px'}}>
    <img className='product-image' style={{width:'400px'}} src={props.image}></img>
       <div className="card-body">
         <h5 className="card-title">{props.title}</h5>
         <p className="card-text">{props.price}</p>
         <p className="card-text">{props.description}</p>
         <a href="#" className="card-link">Card link</a><br></br>
         <a href="#" className="card-link">Card link</a>
         <a href="#" className="card-link" style={{float:'right'}}>Another link</a>
       </div>
    </div>
    </div>
    <div className="col">
    <div className="card" style={{width:'400px',paddig:'250px'}}>
    <img className='product-image' style={{width:'400px'}} src={props.image}></img>
       <div className="card-body">
         <h5 className="card-title">{props.title}</h5>
         <p className="card-text">{props.price}</p>
         <p className="card-text">{props.description}</p>
         <a href="#" className="card-link">Card link</a><br></br>
         <a href="#" className="card-link">Card link</a>
         <a href="#" className="card-link" style={{float:'right'}}>Another link</a>
       </div>
    </div>
    </div>
    
  </div>
   
   )
 }
 
 export default Newcard;
 