import React, { useState } from 'react'
import '../styles/searchContainer.css'
import searchIcon from '../assets/icons8-search.svg';

const Search = (props) => {

    const [searchInput,setSearchInput]=useState("")


    const searchInputHandler=(e)=>{
          setSearchInput(e.target.value)
    }

    const fetchSearchData=(value)=>{
        let url=(value ? value : searchInput)
        url="&search="+url
        props.searchData(url)
    }


  return (
    <div className='searchContainer'>
         <img src={searchIcon} alt="Search" className="searchIcon" onClick={()=>{ fetchSearchData(searchInput)}} />
        <input className='searchInput' placeholder='Search' onChange={searchInputHandler}></input>  
    </div>
  )
}

export default Search