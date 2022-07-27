import React from 'react'
import { useState } from "react"

function Cipher() {
  const [frase, setFrase] = useState("");
  const [answer, setAnswer] = useState("");

  function rot13(str) {
    //Create a double alphabet array. It's double, because when the iteration it's longer than 25, we need to keep it going
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    //Split the string into an array with each char
    const splitStr = str.toUpperCase().split("")
    //The result value
    const newStr = [];
    //Iteration of the string array
    for (let i = 0; i < splitStr.length; i++){
        //When the element is a symbol, push the element with no formmating(this includes spaces)
        if (/\W/.test(splitStr[i])) {newStr.push(splitStr[i])}
    //loop through the alphabet till the 26th index
    for (let i2 = 0; i2 < 26; i2++) {
        let rotNum = i2 + 13;
        //if the element is equal to the alphabet char, push the letter index in the alphabet + 13 
        if (splitStr[i] == alphabet[i2]) {
            newStr.push(alphabet[rotNum]);
        }

    }
}
//join the array to transform it into a string
    return newStr.join("")
}

  const handleSubmit = e => {
    e.preventDefault();
    setAnswer(rot13(frase))
    if (answer === "") return "No Output"
  }

  return (
    <div className='cipher-div'>
    <h1>Rot13 Cipher</h1>
    <p>ROT13 is a simple letter substitution cipher that replaces a letter with the 13th letter after it in the alphabet. To get interesting results, you can try combinations like:</p>
    <ul>
      <li>Gb trg gb gur bgure fvqr</li>
      <li>Jul qvq gur puvpxra pebff gur ebnq</li>
      <li>TRRXF SBE TRRXF</li>
    </ul>
    <form onSubmit={handleSubmit}>
    <input placeholder='Try It!' value={frase} onChange={e => setFrase(e.target.value)}></input>
    <button>Rot13</button>
    </form>
    <p>{answer}</p>
    </div>
  )
}

export default Cipher