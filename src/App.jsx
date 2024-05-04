import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Card from './Card';
import Axioexp from './components/Axioexp';
import Todo from './components/Todo';




const App = () => { 

  return (
    <div className='test' style={{margin:'10px',float:'center'}}>
    <h1 style={{ text-align:'center'}}>React Router Task </h1>
      <Card/>
    </div>
  )
}

export default App;
