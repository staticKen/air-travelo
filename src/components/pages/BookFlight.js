import React, { Component, useState } from 'react';
import {Link} from 'react-router-dom';
import validate from '../../validateInfo';
import useForm from '../../useForm';
 import image2 from '../../images/img-3.svg';
// import Video from '../../videos/about.mp4'
// import Video from '../../videos/about.mp4';
 

import '../../App.css';
import '../BookFlight.css';
import {Dropdown} from 'react-bootstrap';
import {DropdownButton,DropdownType,SplitButton,ButtonGroup} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ReactPlayer from 'react-player';
import Popup from '../Popup.js';
  
const BookFlight = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );
const [flightTitle, setFlightTitle ] = useState("Round-Trip");
const [ecoTitle, setPlaneTitle ] = useState("Economy");
const [travelTitle, setTravelTitle ] = useState("1 Traveler");
const dropdown = [{handleFlight: setFlightTitle, title: flightTitle, first: 'One-Way', second: "Multi-city"},
{handleFlight: setPlaneTitle, title: ecoTitle, first: 'Premium Economy', second: "Business"},
{handleFlight: setTravelTitle, title: travelTitle, first: '2 Travelers', second: "3 Travelers", }]
    return (
        <div className='form-color'>
        <div className='form-container'>
            
        <div className='form-content-right'> 
        
    




            <form onSubmit={handleSubmit} className='form' noValidate>
                
                <h1>
                    Book Now Travel Whenever
                </h1>
                <div className='form-inputs'>
                    <label className='form-label'>Location From</label>
                    <input
                        className='form-input'
                        type='text'
                        name='location2'
                        placeholder='Enter Location From'
                        value={values.location2}
                        onChange={handleChange} />
                    {errors.location && <p>{errors.location}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Going To</label>
                    <input
                        className='form-input'
                        type='text2'
                        name='location'
                        placeholder='Enter Location To'
                        value={values.location}
                        onChange={handleChange} />
                    {errors.location && <p>{errors.location}</p>}
                </div>
                <div className='form-inputs'>
                     <label className='form-label'>Departing</label>
                    <input type='date' name='local2' className='form-control' placeholder='Location going to'></input>
                    <label className='form-label'>Returning</label>
                    <input type='date' name='local1' className='form-control' placeholder='Location coming from for'></input>
                    </div>
                {/* <div className='form-inputs'>
                    <label className='form-label'>Password</label>
                    <input
                        className='form-input'
                        type='password'
                        name='password'
                        placeholder='Enter your password'
                        value={values.password}
                        onChange={handleChange} />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Confirm Password</label>
                    <input
                        className='form-input'
                        type='password'
                        name='password2'
                        placeholder='Confirm your password'
                        value={values.password2}
                        onChange={handleChange} />
                    {errors.password2 && <p>{errors.password2}</p>}
                  
                </div>  */}
<div>
    {dropdown.map((data, idx) => (
      <DropdownButton
        as={ButtonGroup}
        key={idx}
        id={`dropdown-button-drop-${idx}`}
        size="sm"
        variant="secondary"
        title={data.title}
      >
        <Dropdown.Item eventKey="1" onClick={()=>data.handleFlight(data.first)}>{data.first}</Dropdown.Item>
        <Dropdown.Item eventKey="2"onClick={()=>data.handleFlight(data.second)}>{data.second}</Dropdown.Item>
        {/* <Dropdown.Item eventKey="3">Something else here</Dropdown.Item> */}
        {/* <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item> */}
      </DropdownButton>
      
    ))}
  </div>
  <div className="search-button">
  <Popup></Popup>
  </div>
             { /*  <Popup><button className='form-input-btn' type='search' onClick={Popup}>
                Search<a href='{Popup}'></a>
                </button></Popup>*/}
                {/* <span className='form-input-login'> 
                Already have an account? Sign in <a href='/home'>here</a>
                </span> */}
            </form>
        </div> 
         <div className='form-content-left'>
           <img className='form-img' src={image2} alt='flight' /> 
          {/* <ReactPlayer url={Video}/> */}
           {/* <video controls autostart autoPlay src={Video} type="video/mp4" className="vid"/>  */}
        </div> 
       </div>
      
         </div>
       
    );
}

export default BookFlight;