import React from 'react'
import Appbar from '../reuseableComponent/Appbar'
import './style.css';

export default function AboutPage(){
    return(
        <div>
        <Appbar></Appbar>
        <div className='about-container'>
            <div className='aboutus-img'></div>
            <div className="aboutus-text" >
                <div className="inner-about-us">
                <h1 style={{color:'grey'}}>About Us</h1><br></br>
                <h3 style={{fontFamily:'dancing-script'}}>Shruti Rokade</h3>
                <h3 style={{fontFamily:'dancing-script'}}>Priyanka Dsouza</h3>
                <h3 style={{fontFamily:'dancing-script'}}>Soujanya Haravi</h3>
                </div>
                </div>
            
        </div>

    </div>

    )
}