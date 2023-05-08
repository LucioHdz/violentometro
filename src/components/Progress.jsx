import React from 'react'
import './css/Progress.css'


const Progress = ({ value }) => {
  return (
    <div className={value <= 100 / 3 ?
      'box Progress Progress-green' :
      value <= (100 / 3) * 2 ?
        'box Progress Progress-orange' :
        'box Progress Progress-red'}
    >
      {parseInt(value) + '%'}
    </div>
  )
}

export default Progress