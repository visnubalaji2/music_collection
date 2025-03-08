import React, { useEffect } from 'react'
import Header from '../components/Header'
import Table from '../components/table/Table.jsx'
import collectionTableConfigs from '../configs/collection.js'
import useFetch from '../customHooks/fetchData'

import { useLocation } from 'react-router-dom';
import "../styles/Table.css"
import "../styles/collectionDetails.css"

import TabContainer from '../components/TabContainer.jsx'
import {useState} from 'react'
const Collection = () => { 
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id') || '';
  const [apiUrl, setApiUrl] = useState('http://localhost:3000/collections/'+id);
  const data=useFetch(apiUrl) 
  const [dataItems,setDataItems]=useState(data)
  useEffect(()=>{
    setDataItems(data)
  },[data.loading])




  return (
    <>

      
        {dataItems.loading==false && (
        <>
            <Header title={dataItems.data.name} showBreadCrumb={true}  />
            <div className='collectionDetailsContainer'>
                <TabContainer tabConfigs={collectionTableConfigs.tabView} tabData={dataItems.data}/>
            </div>
            <div className='TableContainer'>
                <Table tableConfigs={collectionTableConfigs} tableData={dataItems.data.songs} loading={dataItems.loading} />
            </div>
            </>
        )}
        </>
  )
}

export default Collection