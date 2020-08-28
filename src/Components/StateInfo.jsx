import React , {useEffect,useState,useContext} from 'react'
import {StateContext} from '../Context/StateContext'
import TableState from './TableState'

const  StateInfo  = ( ) => {

const [stateCases,setStateCases] = useContext(StateContext)



    return (
        <div>
          <h4 className="statewiseHeading"> StateWise Cases </h4>
            <TableState stateCases={stateCases} />
        </div>
    )
}
export default StateInfo
