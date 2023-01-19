import React from 'react'

const Doctor = ({doc}) => {
  let star = doc.totalratingpoint;
  let review = doc.totalreview;

  return (
  
      <div className='Doctor_card'>
        <img className='Doctor_image' src='https://pbs.twimg.com/profile_images/1528248719585734657/roEyxCoi_400x400.jpg' alt='' />
        <h3 className='docName'>{doc.name}</h3>
        <p>{doc.provider}</p>
        <div className='Rating_review'>
        {Array(star).fill().map((_, index)=>(
          <span>⭐</span>
        ))}
        <p>({doc.totalreview})</p>
        </div>
        <div className='Place'>
          <p>🏡Place</p>
         <p>{doc.clinicAddress}</p>
        </div>
        <span className='Appointment_type'>{doc.appointmentType}</span>
        <div className='Button_config'>
          <button className='View_more'>View More</button>
          <button className='Book_now'>Book Now</button>
        </div>
      </div>
    
  )
}

export default Doctor