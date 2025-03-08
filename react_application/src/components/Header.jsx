import React, { useState } from 'react'
import "../styles/Header.css"
import { useNavigate } from 'react-router-dom';
const Header = (props) => {
  const {title,showBreadCrumb}=props

  const navigate = useNavigate();
  const navigateToOverview=()=>{
      navigate('/')
  }

  return (
    <>
        {showBreadCrumb &&  
        <div className='breadcrumbContainer'>
           <p className='title' onClick={navigateToOverview}>Overview</p>
           <img src={"chevronDown.svg"} alt="Search" className="caretIconRight"   />
           <p>{title}</p>
        </div>
}
    <div className='headerContainer'>
 
      <div className='headerTabContainer'>
            <p id='pageTitle'>{title}</p>
      </div>
    </div>
    </>
  )
}

export default Header