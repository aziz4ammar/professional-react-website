import React from 'react'
import as from "../img/as.jpg";
import az from "../img/az.png";
import "./affiche.css"
const Affiche = () => {
  return (
    <div>
        <img className='img' src={as} alt="" />
        <h1>iPad</h1>
        <p>Lovable. Drawable. Magical.</p>
        <p><a href="www.zanga.zenga">Learn more</a></p>
        <p><a href="www.zanga.zenga">Buy</a></p>
        <div>
            <img src={az} alt="" />
        </div>
    </div>
  )
}

export default Affiche