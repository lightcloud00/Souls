import React from 'react'
import "./home.css"
import { useState } from 'react'

function Home() {
  return (
    <div class="home">
      <h1 className='bigheader'>Fight for Optimism!</h1>
      <br></br>
            <p className='ptag'>Welcome Traveler to a difficult, open-world game called Souls, encourages players to fight against each other or collaborate in parties to take down challenging enemies.</p>
            <img className='homeimage' src={require('../images/playnow.jpg')} alt='Play Now' ></img>
      </div>
  )
}

export default Home