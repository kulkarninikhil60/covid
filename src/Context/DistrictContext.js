import React,{useState,useEffect,createContext} from 'react'
import axios from 'axios'

export const DistrictContext = createContext()

export const DistrictProvider = (props) => {
    const [stateNames,setStateNames] = useState([])
    

    useEffect( () => {
        async function getCases() {
            try {
            const response = await axios.get('https://api.covid19india.org/state_district_wise.json');
            console.log(response.data)
            //getting names of states as keys
            let stateNames = Object.keys(response.data)
            stateNames[0] = "Select State"
            stateNames[9] = "DNH and Diu Daman"
            setStateNames(stateNames)
            } catch (error) {
              console.error(error);
            }
          }
          getCases()
    } , [] )
    
    return (
        <DistrictContext.Provider value={[stateNames,setStateNames]}>
            {props.children}
        </DistrictContext.Provider>
    )
}