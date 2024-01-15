import React from 'react'
import CARD from './CARD';
export default function TOURS(props) {
    const tours=props.tours;
  return (
    <div className='cont'>
      <h1 className='heading1'>Plan With Me</h1>

      <div className='card-container'>
      {
        tours.map((tour)=>{
            return <CARD tour={tour} fnc={props.fnc}></CARD>
        })
      }
      </div>
    </div>
  )
}
