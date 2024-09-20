import React from 'react'
import './Notecard.css'
function Notecard({title, description , category , emoji})
 {
  return (
    <div className='note-card'>
       <div className='note-card-emoji'>
        {emoji}
        </div>
        <div>
        <h3 className='note-card-title'>{title}</h3>
       <p className='note-card-description'>{description}</p>
       <span className='note-card-category'>{category}</span>
        </div>
    </div>
  )
}

export default Notecard