import React, { useEffect, useState } from 'react'
import Doctor from './Doctor';


const Doctors = () => {
    let [doctorData, setdoctorData] = useState([]);
    let data = {
        UserRole: "Provider"
    };

    useEffect(()=>{
         fetch("https://api.soowgood.com/api/Searches/Provider", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            }).then(async(res)=> {
                let doctorData = await res.json();
                setdoctorData(doctorData);
            })
    }, []);
   
console.log(doctorData)
return (
    <div className='Doctor_section'>
        {doctorData.map((curr) => (
            <Doctor doc={curr} key={curr.clinicId}/>
        ))}
    </div>
)
}

export default Doctors