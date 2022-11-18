import React from 'react'
import as from "../img/as.jpg";
const Affiche = () => {
  return (
    <div>
        <img className='img' src={as} alt="" />
        <h1>iPad</h1>
        <p>Lovable. Drawable. Magical.</p>
        <p><a href="#">Learn more</a></p>
        <p><a href="#">Buy</a></p>
    </div>
  )
}

export default Affiche