import React from 'react'
import { useState } from "react"


function Validcellphone() {
  const [number, setNumber] = useState("");
  const [answer, setAnswer] = useState("");

  function telephoneCheck(str) {
    const regex = /^1? ?(( ?\d{3}[- ]*)|(\( ?\d{3}[- ]*\) *))\d{3}[- ]?\d{4}$/;
    if (regex.test(str)) {
      return <p style={{color: 'green'}}>"This number is valid!"</p>
    } else {
      return <p style={{color: 'red'}}>"This number is not valid!"</p>
    }
    
  }

  const handleSubmit = e => {
    e.preventDefault();
    setAnswer(telephoneCheck(number))
  }

  return (
    <div className='cellphone-div'>
    <h1>Cellphone Validation</h1>
    <p>This app validates a US number. The user may fill out the form field any way they choose as long as it has the format of a valid US number.</p>
    <form onSubmit={handleSubmit}>
      <input placeholder='Your number here' type="tel" value={number} onChange={e => setNumber(e.target.value)}></input>
      <button>Validate</button>
    </form>
    {answer}
    </div>
  )
}

export default Validcellphone