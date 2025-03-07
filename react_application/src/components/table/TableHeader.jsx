import React from 'react'

const TableHeader = (props) => {

    const {headerData}=props
  return (
        <thead>
            <tr>
                {headerData.tableView.map((i)=>{
                    return (
                    <th key={i['datakey']}>
                        {i['label']  }
                    </th>
                    )
                })}
            </tr>


        </thead>
  )
}

export default TableHeader