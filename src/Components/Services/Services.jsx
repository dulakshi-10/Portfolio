import React from 'react';
import './Services.css';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1><span>My Services</span></h1>
        <div className="underline"></div>
      </div>

      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div key={index} className='services-card'>
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className='services-readmore'>
              <button>Read More</button>
              <img src={arrow_icon} alt="arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
