import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function DigitalWatch() {
  const [state, setState] = useState({
    currenttime: new Date().toLocaleTimeString() 
    // Initialize with current time
  });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setState({
        currenttime: new Date().toLocaleTimeString()
      });
    }, 1000);
    
    return () => {
      clearInterval(interval); // Clean up the interval on unmount
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: 'green',
        height: '100vh',
        width:'100%'  
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        
        
      }}
    >

      <div className="container m-0 mx-5 "  >

        <div className="row">
          <div className="col-md-4">
          <div className="card border shadow-lg card-hover">

              <div className="card-header bg-warning text-center">
                <p className="h2 p-3 ">Digital Watch</p>
              </div>
              <div className="card-body bg-light text-center p-5 card-body-hover">
                <h1>{state.currenttime}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalWatch;
