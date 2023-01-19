import React from 'react'
import Doctors from './Doctors'

const Main = () => {
    return (
        <div>
            <div className='Nav_bar'>
                <h1 className='Main_heading'>Doctors</h1>
            </div>
            <div className='Nav-search'>
                <input className="Search_bar" type="text" placeholder='🔍 Search doctor'></input>
                <button>NewDoctor</button>
            </div>

        <Doctors />
        </div>
    )
}

export default Main