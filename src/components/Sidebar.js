import React from 'react'

const Sidebar = () => {
  return (
    <div className='Sidebar_section'> 
     <img className='Brand_image' src='/brand-image.png' alt='brand Name' /> 
     <ul className='list'>
         <li className='list_item'>DashBoard</li>
         <li className='list_item'>Appointment</li>
         <li className='list_item'>Doctor</li>
         <li className='list_item'>Profile Setting</li>
         <li className='list_item'>Password Change</li>
     </ul>
     </div>
  )
}

export default Sidebar