import React,{useState,useEffect,createContext} from 'react'
import axios from 'axios'

export const CountryContext = createContext();

export const CountryProvider = (props) => {
    const [cases,setCases] = useState([])
    useEffect( () => {
        async function getCases() {
            try {
              const response = await axios.get('https://api.covid19india.org/data.json');
           console.log(response.data.statewise[0])
             let cases = response.data.statewise[0]
              setCases(cases)
            } catch (error) {
              console.error(error);
            }
          }
          getCases()
    },[] )
    return (
        <CountryContext.Provider value={[cases,setCases]}>
            {props.children}
        </CountryContext.Provider>
    )
}