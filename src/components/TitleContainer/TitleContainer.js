import React from 'react'
import './TitleContainer.css'

const TitleContainer=({title}) => {
  return (
    <h3 className='title-container py-2'>
       <span>{title}</span> 
    </h3>
  )
}

export default TitleContainer