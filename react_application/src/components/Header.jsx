import React, { useState } from 'react'
import "../styles/Header.css"
const Header = (props) => {
  const {title,showBreadCrumb}=props

  
  return (
    <>
        {showBreadCrumb &&  <div className='breadcrumbContainer'>
           <p>Overview {title}</p>
      </div>
}
    <div className='headerContainer'>
 
      <div className='headerTabContainer'>
            <h2>{title}</h2>
      </div>
    </div>
    </>
  )
}

export default Header