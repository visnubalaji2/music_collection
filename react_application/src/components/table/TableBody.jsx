import React from 'react'
import { useNavigate } from 'react-router-dom';
import useFormat from '../../customHooks/dataFormat'
const TableBody = (props) => {
  const {tableData,tableConfigs,loading}=props
  const { formatValue } = useFormat();
  const navigate = useNavigate();
  const navigateToDetails=(id)=>{
      navigate('/collection?id='+id)
  }

  if(tableData.length==0){
    return (
      <tbody>
        <tr>
          <td>No Results to Show</td>
        </tr>
      </tbody>
    )
  }else{
  return (
    <tbody>
    
    {
      tableData.map((data) => (
        <tr key={data.id}> 
          {tableConfigs.tableView.map((obj) => {
          if(obj['format']=='seconds')
            {
              return <td key={obj.label}>{formatValue(data[obj.datakey],"seconds")} </td>
            }
          else if(obj['format']=='bytes')
          {
            return <td key={obj.label}>{formatValue(data[obj.datakey],"bytes")}</td>
          }
          else if(obj['format']=='date-time'){
            return <td key={obj.label}>{formatValue(data[obj.datakey],"datetime")}</td>
          }
          else if(obj['format']=='icon'){
            return <td key={obj.label} onClick={()=>{navigateToDetails(data[obj.datakey])}}> 
            <div className="icon-text">
               <img src={obj.iconSrc} alt="View" className="icon" />
               <p className="text">View Details</p>
            </div>
          </td>
          }
          else if(obj['format']=='array'){
            return <td key={obj.label} >{formatValue(data[obj.datakey],"array")}</td>
          }
          else {
            return obj.child !== undefined ? (
              <td key={obj.label}>{data[obj.datakey]} <span>{data[obj.child]}</span></td>
            ) : (
              <td key={obj.label}>{data[obj.datakey]}</td>
            );
          }
          }
          
          )}
        </tr>
      ))}
  </tbody>
  )
}}

export default TableBody