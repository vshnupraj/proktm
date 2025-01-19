// src/components/Worker.js
import React from 'react';
import '../Styles/Home.css'; 


const Worker = ({ worker }) => {
    return (
        <div className='container border rounded-3 mb-3 box worker boxh overflow-auto '>
            <div className='row m-4 '>
                <div className='col-sm-3  '>

                    <div className="" style={{ width: '6rem' }}>
                        <img src={worker.photo} alt={worker.name} className='img-fluid  border rounded-5 ' />
                    </div>
                    <div className=''>
                        <h3 className="">{worker.name}</h3>
                        <p className="">Phone: {worker.phone}</p>
                    </div>
                    
                </div>

                <div className="col-sm-9 ">
                    
                    <h5>Places:</h5>

                    <ul>
                        {worker.places.map((place, index) => (
                            <li key={index}>{place}</li>
                        ))}
                    </ul>
                </div>
                    
            </div> 
        </div>
    );
  };
  
export default Worker;