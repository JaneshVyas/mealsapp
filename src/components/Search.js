import React, { useState } from 'react'
import { useGlobalContext } from '../context'

const Search = () => {

  const [text, setText]=useState('');

  const {setSearchTerm, fetchRandomMeals} = useGlobalContext();

  const handleChange=(e)=>{
    setText(e.target.value);
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(text) {
      setSearchTerm(text)
    }
  }

  const handleRandomMeal = () => {
    setSearchTerm('')
    setText('')
    fetchRandomMeals()
  }

  return (
    <div style={{height:'5rem', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <form style={{display:'flex', gap:'0.5rem', flexWrap:'wrap'}} onSubmit={handleSubmit}>
        <input type='text' placeholder='type favourite meal' style={{maxWidth:'200px', padding:'0.375rem 0.75rem', border:'1px solid grey', fontFamily:'inherit', color:'grey'}} value={text} onChange={handleChange} />
        <button type='submit' style={{fontSize:'0.75rem'}}>Search</button>
        <button type='button' style={{fontSize:'0.75rem'}} onClick={handleRandomMeal}>Surprise Me</button>
      </form>
    </div>
  )
}

export default Search