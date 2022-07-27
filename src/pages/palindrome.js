import React from 'react'
import { useState } from "react"
function Palindrome() {
  const [palindrome, setPalindrome] = useState("");
  const [answer, setAnswer] = useState("");

  function is_palindrome(str) {
    /*Erase all non-alphanumeric chars and lower-case the string*/
    let testStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    /*Split the string into an array, reverse it and turn it into a string again*/
    let reverse = testStr.split("").reverse().join("");
    /*Check if the string is equal to the reversed string*/
    if (testStr == reverse) {
      return <p style={{color: 'green'}}>"It's a palindrome"</p>
    } else {
      return <p style={{color: 'red'}}>"It's not a palindrome"</p>
    }
    }

  const handleSubmit = e => {
    e.preventDefault();
    setAnswer(is_palindrome(palindrome))
  }
  return (
    <div className='palindrome-div'>
    <h1 className='palindrome-title'>Palindrome Comprobator</h1>
    <p>Write a word and find out if it's a palindrome!</p>
    <form onSubmit={handleSubmit}>
    <input value={palindrome} onChange={e => setPalindrome(e.target.value)}/>
    <button>Check</button>
    </form>
    {answer}
    </div>
  )
}

export default Palindrome