import React , {useEffect , useState} from 'react'
import axios from 'axios'
import Card from './Card'


const CountryInfo = () => {
  let nfObject = new Intl.NumberFormat('en-IN');
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
      <>
      <h4 className="country"> India Corona Cases </h4>
      <div className="cards">
            <Card  title="Confirmed Cases" cases={nfObject.format(cases.confirmed)} />
            <Card  title="Active Cases" cases={nfObject.format(cases.active)}/>
            <Card  title="Recovered Cases" cases={nfObject.format(cases.recovered)}/>
            <Card  title="Deaths" cases={nfObject.format(cases.deaths)}/>
        </div>
      </>
        
    )
}
export default CountryInfo