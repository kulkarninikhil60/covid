import React from 'react'

const TableState = ({stateCases}) => {
    let nfObject = new Intl.NumberFormat('en-IN');
    return (
        <div className="statesTable">
            <table className="table table-bordered table-hover">
            
                <tbody>
                
                <tr> 
               <th className="table-info">States</th>
               <th className="table-danger">Active</th>
               <th className="table-warning">Confirmed</th>
               <th className="table-success">Recovered</th>
               <th className="table-secondary">Deaths</th>
               
             </tr>
             
                    {stateCases.map( (stateCase,index) => {
                        return <tr key={index}> 
                        <td className="table-info">{stateCase.state} </td>
                        <td className="table-danger">{nfObject.format(stateCase.active)} </td>
                        <td className="table-warning">{nfObject.format(stateCase.confirmed)} </td>
                        <td className="table-success">{nfObject.format(stateCase.recovered)} </td>
                        <td className="table-secondary">{nfObject.format(stateCase.deaths)} </td>
                         </tr>
                    } )}
                </tbody>
                  
            </table>
        </div>
    )
}

export default TableState;