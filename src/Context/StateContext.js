import React,{useState,useEffect,createContext} from 'react'
import axios from 'axios'


export const StateContext = createContext();

export const StateProvider = (props) => {
    const [stateCases,setStateCases] = useState([])

    useEffect(( ) => {
        async function getCases() {
                try {
                  const response = await axios.get('https://api.covid19india.org/data.json');
                console.log(response.data)
                
                  
                setStateCases(response.data.statewise)
                } catch (error) {
                  console.error(error);
                }
              }
              getCases()
    },[])
    return (
        <StateContext.Provider value={[stateCases,setStateCases]}>
            {props.children}
        </StateContext.Provider>
    )
}