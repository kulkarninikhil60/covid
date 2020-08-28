import React from 'react'

const DistrictTable = ({districtNames,districtCases})  => {
    let nfObject = new Intl.NumberFormat('en-IN');
    return (
        <div className="districtsTable">
            <table className="table table-bordered table-hover">
                <tbody>
                <tr>
                    <th className="table-info"> City </th>
                    <th className="table-danger">Active</th>
                    <th className="table-warning">Confirmed</th>
                    <th className="table-success">Recovered</th>
                    <th className="table-secondary">Deaths</th>
                    </tr>
                    <tr>
                       <td className="table-info">{districtNames.map ( (district) => {
                        return <p>{district}</p> } )}</td>
                       <td className="table-danger">{districtCases.map( (districtCase) => {
                        return <p> {nfObject.format(districtCase.active)}  </p>
                        } )}</td>
                       <td className="table-warning">{districtCases.map( (districtCase) => {
                        return <p> {nfObject.format(districtCase.confirmed)}  </p>
                        } )}</td>
                       <td className="table-success">{districtCases.map( (districtCase) => {
                        return <p> {nfObject.format(districtCase.recovered)}  </p>
                        } )}</td> 
                        <td className="table-secondary">
                        {districtCases.map( (districtCase) => {
                        return <p> {nfObject.format(districtCase.deceased)}  </p>
                        } )}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default DistrictTable
