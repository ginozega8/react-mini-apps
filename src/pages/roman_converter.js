import React from 'react'
import { useState } from "react"
function Romanconverter() {
  const [number, setNumber] = useState("");
  const [roman, setRoman] = useState("");

  function convertToRoman(num) {
    //Create a variable to store the romanNumber
    let romanConversion = "";
    //Create an object with the equivalences between roman and arabic numbers
    if (num > 3999) {
      return "this number is too big!"
    }
    var roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
      };
      //Loop through the keys(roman nums) of the object
      for (var keys in roman) {
        //Create a loop that will loop while num is greater than roman[keys](current external loop number)
        while (num >= roman[keys]) {
            //Concatenate the result string with keys(roman numbers)
            romanConversion += keys
            //Substract the object value from num, this way we get a base case
            num -= roman[keys]
        }

      }
      //return the result
      return romanConversion
   }

  const handleSubmit = e => {
    e.preventDefault();
    setRoman(convertToRoman(number))
  }

  return (
    <div className='roman-converter-div'>
    <h1>Roman Converter</h1>
    <p>Convert your numbers to roman!</p>
    <form onSubmit={handleSubmit}>
      <input placeholder='Your number here' type="number" value={number} onChange={e => setNumber(e.target.value)}></input>
      <button>Convert</button>
    </form>
    <p>{roman}</p>
    </div>
  )
}

export default Romanconverter