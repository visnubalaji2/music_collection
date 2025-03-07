import React from 'react'
import { useNavigate } from 'react-router-dom';
import useFormat from '../../customHooks/dataFormat'
const TableBody = (props) => {
  const {tableData,tableConfigs,loading}=props
  const { formatValue } = useFormat();
  const navigate = useNavigate();
  const navigateToDetails=(id)=>{
  console.log()
  navigate('/collection?id='+id)
}


  return (
    <tbody>
    {
      tableData.map((data) => (
        <tr key={data.id}> 
          {tableConfigs.tableView.map((obj) => {
          if(obj['format']=='seconds')
            {
              return <td key={obj.datakey}>{formatValue(data[obj.datakey],"seconds")} </td>
            }
          else if(obj['format']=='bytes')
          {
            return <td key={obj.datakey}>{formatValue(data[obj.datakey],"bytes")}</td>
          }
          else if(obj['format']=='date-time'){
            return <td key={obj.datakey}>{formatValue(data[obj.datakey],"datetime")}</td>
          }
          else if(obj['format']=='icon'){
            return <td key={obj.datakey} onClick={()=>{navigateToDetails(data[obj.datakey])}}><p style={{color:"#025992"}}>View Details</p></td>
          }
          else if(obj['format']=='array'){
            return <td key={obj.datakey} >{formatValue(data[obj.datakey],"array")}</td>
          }
          else {
            return obj.child !== undefined ? (
              <td key={obj.datakey}>{data[obj.datakey]} <span>{data[obj.child]}</span></td>
            ) : (
              <td key={obj.datakey}>{data[obj.datakey]}</td>
            );
          }
          }
          
          )}
        </tr>
      ))}
  </tbody>
  )
}

export default TableBody