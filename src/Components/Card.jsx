import React from 'react'

const  Card = ({title,cases}) => {
    return (
       
        <div className="card" >
            <div className="card-body">
            <h5 className="card-title"> {title} </h5>
            <h6 className="card-text"> {cases} </h6>
        </div>
        </div>
        
        
    )
}
export default Card
