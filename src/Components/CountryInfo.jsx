import React , {useContext} from 'react'
import Card from './Card'
import {CountryContext} from '../Context/CountryContext'

const CountryInfo = () => {
  let nfObject = new Intl.NumberFormat('en-IN');
    const [cases,setCases] = useContext(CountryContext)

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