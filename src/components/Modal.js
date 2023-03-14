import React from 'react'
import { useGlobalContext } from '../context'

const Modal = () => {

  const {selectedMeal, closeModal} = useGlobalContext()
  const {strMealThumb:image, strMeal:title, strInstructions:text, strSource:source} = selectedMeal

  return (
    <aside style={{position:'fixed', top:'0', left:'0', width:'100%', height:'100%', background:'rgba(0,0,0,0.85)', display:'grid', placeItems:'center'}}>
      <div style={{width:'80vw', maxWidth:'800px', height:'80vh', background:'white', overflow:'scroll'}}>
        <img src={image} alt={title} style={{height:'15rem'}} />
        <div style={{padding:'1rem 1.5rem'}}>
          <h4>{title}</h4>
          <p style={{color:'grey'}}>Cooking Instructions</p>
          <p style={{color:'grey'}}>{text}</p>
          <a href={source} target='_blank' rel='noreferrer' style={{display:'block', marginBottom:'1rem', textDecoration:'underline'}}>Original Source</a>
        <button onClick={closeModal} style={{background:'red', color:'white', cursor:'pointer'}}>Close</button>
        </div>
      </div>
    </aside>
  )
}

export default Modal