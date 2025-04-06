import React, { useState } from "react";
import './AgeCalculator.css'

const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState('')
  const [age, setAge] = useState(0)

  const calculateAge = () =>{
    const today = new Date();
    const birthdateDate  = new Date(birthdate)

    let age = today.getFullYear() - birthdateDate.getFullYear()
    const monthDiff = today.getMonth() - birthdateDate.getMonth()
    if(monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateDate.getDate())){
      age--;
    }
    setAge(age)
  }
  const resetCalculator = () => {
    setBirthdate('')
    setAge(0)
  }
  return(
    <>
    <div className="container">
      <h2 className="heading container_title">Age Calculator</h2>
      <p className='para container_title'>The Age Calculator can determine the age or interval between two dates. The calculated age will be displayed in years,</p>
      <div className="container-middle">
        <div className="right">
          <h4>Date of Birth</h4>
          <input type="date" className="date" value={birthdate} onChange={e => setBirthdate(e.target.value)}  />
          <div className="buttons">
            <button className="btn" onClick={calculateAge}>Calculate Age</button>
            <button className="btn" onClick={resetCalculator}>Reset</button>
          </div>
        </div>

        <div className="left">
          <div className="middle-para">
            <h1>Your Age is</h1>
          </div>
          <h1 className="age-heading">{age > 0 ? `${age}`: ''}</h1>
        </div>

      </div>

    </div>

    </>
  )
};
export default AgeCalculator