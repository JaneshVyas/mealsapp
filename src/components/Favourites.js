import React from 'react'
import { useGlobalContext } from '../context'

const Favourites = () => {

  const {favourites, selectMeal, removeFromFavourites} = useGlobalContext()

  return (
    <div style={{background:'black', color:'white', padding:'1rem 0'}}>
      <div style={{margin:'0 auto'}}>
        <h5>Favourites</h5>
        <div style={{display:'flex', gap:'0.5rem', flexWrap:'wrap'}}>
          {favourites.map((item)=>{
            const {idMeal, strMealThumb:image} = item;
            return <div key={idMeal} style={{textAlign:'center', display:'block'}}>
              <img alt='meal pic' src={image} style={{width:'60px', borderRadius:'50%', border:'5px solid white', cursor:'pointer'}} onClick={()=>selectMeal(idMeal, true)} />
              <br />
              <button onClick={()=>removeFromFavourites(idMeal)} style={{marginTop:'0.25rem', background:'transparent', color:'white', border:'transparent', cursor:'pointer', fontSize:'0.5rem'}}>Remove</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Favourites