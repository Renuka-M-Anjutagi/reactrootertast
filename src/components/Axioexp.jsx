
import React, { useState, useEffect } from "react";
import axios from "axios";

function Axioexp() {
    const url = "https://6633a1b4f7d50bbd9b4a211e.mockapi.io/todolist";
    const [data, setData] = useState([]);
  
    const fetchInfo = () => {
      return axios.get(url).then((res) => setData(res.data));
    };
  
    useEffect(() => {
      fetchInfo();
    }, []);
  
    return (
      <div className="App">
        <h1 style={{ color: "green" }}>using Axios Library to Fetch Data</h1>
        <center>
          {data.map((dataObj, index) => {
            return (
              <div
                style={{
                  width: "15em",
                  backgroundColor: "#CD8FFD",
                  padding: 2,
                  borderRadius: 10,
                  marginBlock: 10,
                }}
                key={index}>
                <p style={{ fontSize: 20, color: 'white' }}>{dataObj.id}</p>
                <p style={{ fontSize: 20, color: 'white' }}>{dataObj.title} </p>
                <p style={{ fontSize: 20, color: 'white' }}>{dataObj.description}</p>
                
        
                


              </div>
              
            );
          })}
        </center>
        
      </div>
    );
}

export default Axioexp;
