import React from 'react'
import useFormat from '../customHooks/dataFormat'
const TabContainer = (props) => {
    const { formatValue } = useFormat();
    const {tabConfigs,tabData}=props



    const formatTotalValue=(operation,data)=>{
        console.log(operation,"operation")
        console.log(data,"data")
        const total = data[operation['key']].reduce((sum, i) => sum + i[operation['value']], 0);
        if(operation.format=='bytes'){
            return formatValue(total,'bytes')
        }else if(operation.format=='seconds'){
            return formatValue(total,'minutes')
        }
    }
  return (
        <ul>
            {tabConfigs.map((tab)=>{
                if (tab.datakey && tab.format=='date-time'){
                    return (
                        <li>
                            <div>
                            <p>{tab['label']}</p>
                            <p>{formatValue(tabData[tab['datakey']],'date')}</p>
                            </div>
                        </li>)
                }
                else if(tab.datakey ==null){
                    return (
                    <li>
                        <div>
                        <p>{tab['label']}</p>
                         <p>{formatTotalValue(tab.performOpertion,tabData)}</p>
                         </div>
                    </li>)
                }else{
                    return (
                    <li>
                        <div>
                        <p>{tab['label']}</p>
                         <p>   {tabData[tab['datakey']]}</p>
                        </div>
                    </li>)
                }
               
            })}
        </ul>
  )
}

export default TabContainer