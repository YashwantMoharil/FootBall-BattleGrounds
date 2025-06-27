import React from 'react'
import loading from "../Assets/Images/loading.png"

function WaitSign() {
  return (

    <div className='waitingSign'>
      <img className='spinner' src={loading} />
      <div className='waitingSignMsg'>Waiting for other players to join</div>

    </div>
  )
}

export default WaitSign