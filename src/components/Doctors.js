import React, { useEffect, useState } from 'react'

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
   

return (
    <div className='Doctor_section'>
        <h1>Hello</h1>
        {
           doctorData.map((curr)=> {
             return <span>{curr.name}</span>
           })
        }
    </div>
)
}

export default Doctors