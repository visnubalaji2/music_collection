import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
const Table = (props) => {

    const {tableConfigs,tableData}=props


  return (

     <>
      <>
      <table>
        <TableHeader headerData={tableConfigs}/>
        <TableBody tableConfigs={tableConfigs} tableData={tableData}/>
      </table>
      </>
      
    </>

  )
}

export default Table