import React from 'react';
import './App.css';
import {StateProvider} from './Context/StateContext'
import {CountryProvider} from './Context/CountryContext'
import {DistrictProvider} from './Context/DistrictContext'
import StateInfo from './Components/StateInfo';
import CountryInfo from './Components/CountryInfo';
import DistrictInfo from './Components/DistrictInfo';

function App() {
  return (
    <>
    <CountryProvider>
      <CountryInfo />
    </CountryProvider>
    <StateProvider>
      <StateInfo />
    </StateProvider>
    <DistrictProvider>
      <DistrictInfo />
    </DistrictProvider>
        developed by nikhil
     
    </>
      
    
  );
}

export default App;

