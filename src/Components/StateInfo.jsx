import React , {useEffect,useState} from 'react'
import axios from 'axios'
import TableState from './TableState'

const  StateInfo  = ( ) => {

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
        <div>
          <h4 className="statewiseHeading"> StateWise Cases </h4>
            <TableState stateCases={stateCases} />
        </div>
    )
}
export default StateInfo
