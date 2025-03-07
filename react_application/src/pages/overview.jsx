import React, { useEffect } from 'react'
import Header from '../components/Header'
import Table from '../components/table/Table.jsx'
import tableConfigs from '../configs/overview.js'
import useFetch from '../customHooks/fetchData'
import Search from '../components/Search.jsx'
import Filter from '../components/Filter.jsx'
import "../styles/Table.css"
import {useState} from 'react'
import SchimmerTable from '../components/table/SchimmerTable.jsx'

const Overview = () => { 

  const [apiUrl, setApiUrl] = useState('http://localhost:3000/collections');
  const data=useFetch(apiUrl) 
  const [dataItems,setDataItems]=useState(data)
  useEffect(()=>{
    setDataItems(data)
  },[data.loading])

  const fetchDatafromAPI = (value) => {
    setApiUrl('http://localhost:3000/collections?'+value)
  };


  return (
    <>
    <Header title={"Overview"}/>

   
    <div className='TableContainer'>
         <div className='TableFiltersAndSearchContainer'>
              <Search searchData={fetchDatafromAPI}/>
              <Filter filterConfigs={tableConfigs.tableView} fetchData={fetchDatafromAPI} />
          </div>
        {dataItems.loading==true &&  <SchimmerTable  />}
       {dataItems.loading==false  && <Table tableConfigs={tableConfigs} tableData={dataItems.data} loading={data.loading} />} 
    </div>
    </>
  )
}

export default Overview