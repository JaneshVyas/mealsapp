import React from 'react'
import { useGlobalContext } from '../context';
import {BsHandThumbsUp} from 'react-icons/bs';

const Meals = () => {
  const {meals, loading, selectMeal, addToFavourites}=useGlobalContext();

  if(loading) {
    return(
      <div style={{padding: '3rem 0', margin: '0 auto'}}>
        <h4>Loading...</h4>
      </div>
    )
  }

  if(meals.length<1) {
    return(
      <div style={{padding: '3rem 0', margin: '0 auto'}}>
        <h4>No meal found for your search term please search for another meal</h4>
      </div>
    )
  }

  return (
    <div style={{padding: '3rem 0', margin: '0 auto', display: 'grid', gap: '2rem', gridTemplateColumns: '1fr 1fr 1fr', background: 'lightblue'}}>
      {meals.map((singleMeal)=>{
        const {idMeal, strMeal:title, strMealThumb:image} = singleMeal
        return <div key={idMeal} style={{background: 'white', }}>
          <br />
          <img alt={title} src={image} style={{height: '15rem', cursor:'pointer'}} onClick={()=>selectMeal(idMeal)}/>
          <footer style={{display: 'flex', alignItems: 'center', padding: '1rem 1.5rem', justifyContent: 'space-between', flexWrap: 'wrap'}}>
            <h4>{title}</h4>
            <button style={{background: 'transparent', border: 'transparent', fontSize: '1.5rem', cursor: 'pointer'}} onClick={()=>addToFavourites(idMeal)}><BsHandThumbsUp /></button>
          </footer>
          <br />
        </div>
      })}
    </div>
  )
}

export default Meals