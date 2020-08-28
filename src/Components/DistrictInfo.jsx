import React , {useState,useEffect,useContext} from 'react'
import axios from 'axios'
import {DistrictContext} from '../Context/DistrictContext'
import DistrictTable from './DistrictTable'

const DistrictInfo = () => {

const [stateNames,setStateNames] = useContext(DistrictContext)
const [districtNames,setDistrictNames] = useState([])
const [stateNameValue,setStateNameValue] = useState(20)
const [districtCases,setDistrictCases] = useState([])

useEffect( () => {
  async function getDistrictInfo() {
      try {
      const response = await axios.get('https://api.covid19india.org/state_district_wise.json');
      const entries = Object.entries(response.data)
      let stateWiseDistricts = entries[stateNameValue][1].districtData
      let districtNames = Object.keys(stateWiseDistricts)
      setDistrictNames(districtNames)
      
      let districtInfo = Object.values(stateWiseDistricts)
      let districtCases = districtInfo.map( (districtCases) => {
          return districtCases
      } )
      setDistrictCases(districtCases)
      
      } catch (error) {
        console.error(error);
      }
    }
    getDistrictInfo()
} ,[stateNameValue] )



const selectState = (event) => {
   setStateNameValue(event.target.value)
  }
    return (
        <div>
            
            <select onChange={selectState}
            className="btn btn-secondary bg-light text-dark dropdown-toggle selection">
              
            {stateNames.map( (stateName,index) => {
                return <option key={index} value={index}> 
                {stateName} </option>
            } )}
            </select>
            <h4 className="stateNameHeading"> {stateNames[stateNameValue]} </h4>
            <DistrictTable districtNames={districtNames}
            districtCases={districtCases} />
            
            
            
        </div>
    )
}
export default DistrictInfo
