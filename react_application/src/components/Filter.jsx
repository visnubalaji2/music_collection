import React, { useState } from 'react'
import caretDown from '../assets/caret-down.svg'
import '../styles/Table.css'
import { useEffect,useRef } from 'react'
const Filter = (props) => {
    const [showFilter,setShowFilter]=useState(false)
    const [filters,setFilters]=useState([])

    const dropdownRef = useRef(null); 
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowFilter(false); 
      }
    };
  
    useEffect(() => {
      if (showFilter) {
        document.addEventListener("mousedown", handleClickOutside);
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [showFilter]);


    const [selectedFilters, setSelectedFilters] = useState([]);
    const {filterConfigs}=props
    const filterData=filterConfigs.filter((i)=>{
        return i.filter==true
    })

    const showFilters=(val)=>{
        setShowFilter(!showFilter)
        console.log(val.filterValues,"test")
        setFilters(val.filterValues)
    }
    const handleFilterChange=(filterValue)=>{
        setSelectedFilters((prevSelected) => {
            if (prevSelected.includes(filterValue)) {
                return prevSelected.filter(item => item !== filterValue);
            } else {
                return [...prevSelected, filterValue];
            }
        });
    }

    useEffect(()=>{
        props.fetchData(`&filters=${selectedFilters}`)
    },[selectedFilters])
  return (
    <div className='FilterContainer'>
        {filterData.map((i)=>{
            return (
                <div className='filterBox' ref={dropdownRef}>
                    <p>{i['label']}  <img onClick={()=>{showFilters(i)}}  src={caretDown} alt="Search" className={`caretIcon`}  /></p>
                    {
                        showFilter && filters.length>0 && (
                            <div className='filterDropDown'>
                                <ul>
                                    {filters.map((j)=>{
                                        return <li><input checked={selectedFilters.includes(j)} onChange={()=>{handleFilterChange(j)}} type="checkbox"></input> {j}</li>
                                    })}
                                </ul>

                            </div>
                        )
                    }

                 </div>
            )

        })}

    </div>
  )
}

export default Filter